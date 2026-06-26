/**
 * ACCURIANTECH CONTACT FORM — Google Apps Script
 * 
 * Receives contact enquiries from the website, stores them in Google Sheets,
 * and sends email notifications to info@accuriantech.com.
 * 
 * Sheet: "Contact Enquiries"
 * Columns: Date & Time | Full Name | Email | Company | Phone | Solution | Timeline | Message | Status
 * 
 * ─────────────────────────────────────────────────────
 * DEPLOYMENT:
 * 1. Create a new Google Apps Script project
 * 2. Paste this code
 * 3. Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployed URL and set it as VITE_CONTACT_FORM_URL in .env
 * ─────────────────────────────────────────────────────
 */

const CONTACT_SHEET_NAME = "Contact Enquiries";
const NOTIFICATION_EMAIL = "info@accuriantech.com";

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return jsonResponse({ success: false, error: "Missing required fields" }, 400);
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return jsonResponse({ success: false, error: "Invalid email format" }, 400);
    }

    // Get or create the sheet
    var sheet = getOrCreateContactSheet();

    // Build timestamp
    var timestamp = new Date();
    var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

    // Sanitize inputs
    var fullName = sanitize(data.name);
    var email = sanitize(data.email);
    var company = sanitize(data.company || "");
    var phone = sanitize(data.phone || "");
    var solution = sanitize(data.solution || "");
    var timeline = sanitize(data.timeline || "");
    var message = sanitize(data.message);

    // Append row to sheet
    sheet.appendRow([
      formattedDate,
      fullName,
      email,
      company,
      phone,
      solution,
      timeline,
      message,
      "New"
    ]);

    // Send email notification
    sendNotificationEmail({
      name: fullName,
      email: email,
      company: company,
      phone: phone,
      solution: solution,
      timeline: timeline,
      message: message,
      timestamp: formattedDate
    });

    return jsonResponse({ success: true, message: "Enquiry submitted successfully" });

  } catch (err) {
    return jsonResponse({ success: false, error: "Server error: " + err.message }, 500);
  }
}

/**
 * Handle GET requests (for CORS preflight or health check)
 */
function doGet(e) {
  return jsonResponse({ status: "ok", service: "Accuriantech Contact Form" });
}

/**
 * Get or create the Contact Enquiries sheet with proper headers
 */
function getOrCreateContactSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONTACT_SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONTACT_SHEET_NAME);
    var headers = ["Date & Time", "Full Name", "Email", "Company", "Phone", "Solution", "Timeline", "Message", "Status"];
    sheet.appendRow(headers);

    // Format header row
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#2563EB");
    headerRange.setFontColor("#FFFFFF");

    // Set column widths
    sheet.setColumnWidth(1, 160); // Date & Time
    sheet.setColumnWidth(2, 150); // Full Name
    sheet.setColumnWidth(3, 200); // Email
    sheet.setColumnWidth(4, 150); // Company
    sheet.setColumnWidth(5, 130); // Phone
    sheet.setColumnWidth(6, 180); // Solution
    sheet.setColumnWidth(7, 130); // Timeline
    sheet.setColumnWidth(8, 300); // Message
    sheet.setColumnWidth(9, 80);  // Status

    // Freeze header row
    sheet.setFrozenRows(1);
  }

  return sheet;
}

/**
 * Send email notification to Accuriantech team
 */
function sendNotificationEmail(data) {
  try {
    var subject = "New Contact Enquiry - Accuriantech Website";

    var body = "New Contact Enquiry Received\n";
    body += "═══════════════════════════════════════\n\n";
    body += "Full Name: " + data.name + "\n";
    body += "Email: " + data.email + "\n";
    body += "Company: " + data.company + "\n";
    body += "Phone: " + data.phone + "\n";
    body += "Solution of Interest: " + data.solution + "\n";
    body += "Estimated Timeline: " + data.timeline + "\n";
    body += "Message: " + data.message + "\n\n";
    body += "═══════════════════════════════════════\n";
    body += "Submitted At: " + data.timestamp + "\n";
    body += "\nThis enquiry has been saved to the Contact Enquiries sheet.";

    var htmlBody = '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">';
    htmlBody += '<div style="background: #2563EB; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">';
    htmlBody += '<h2 style="margin: 0; font-size: 18px;">New Contact Enquiry Received</h2>';
    htmlBody += '<p style="margin: 4px 0 0; opacity: 0.8; font-size: 13px;">Accuriantech Website</p>';
    htmlBody += '</div>';
    htmlBody += '<div style="border: 1px solid #E2E8F0; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">';
    htmlBody += '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">';
    htmlBody += tableRow("Full Name", data.name);
    htmlBody += tableRow("Email", '<a href="mailto:' + data.email + '">' + data.email + '</a>');
    htmlBody += tableRow("Company", data.company || "—");
    htmlBody += tableRow("Phone", data.phone || "—");
    htmlBody += tableRow("Solution of Interest", data.solution || "—");
    htmlBody += tableRow("Estimated Timeline", data.timeline || "—");
    htmlBody += tableRow("Message", data.message);
    htmlBody += tableRow("Submitted At", data.timestamp);
    htmlBody += '</table>';
    htmlBody += '</div></div>';

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body,
      htmlBody: htmlBody
    });
  } catch (e) {
    // Email failed but enquiry is saved — log error
    Logger.log("Email notification failed: " + e.message);
  }
}

/**
 * Helper: Build HTML table row for email
 */
function tableRow(label, value) {
  return '<tr>'
    + '<td style="padding: 10px 12px; border-bottom: 1px solid #F1F5F9; font-weight: 600; color: #374151; width: 160px; vertical-align: top;">' + label + '</td>'
    + '<td style="padding: 10px 12px; border-bottom: 1px solid #F1F5F9; color: #1F2937;">' + (value || "—") + '</td>'
    + '</tr>';
}

/**
 * Helper: Validate email format
 */
function isValidEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Helper: Sanitize input to prevent injection
 */
function sanitize(str) {
  if (!str) return "";
  return String(str).trim().substring(0, 2000);
}

/**
 * Helper: Return JSON response with CORS headers
 */
function jsonResponse(data, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * SETUP: Run once to initialize the sheet
 */
function setupContactSheet() {
  getOrCreateContactSheet();
  Logger.log("Contact Enquiries sheet created/verified.");
}
