/**
 * ACCURIANTECH JOBS API — Google Apps Script
 * 
 * Sheet structure (first row = headers):
 * id | title | department | location | type | experience | description | responsibilities | requirements | preferred | benefits | isActive | createdAt
 * 
 * Deployment: Deploy as Web App → Execute as Me → Anyone can access
 */

const SHEET_NAME = "Jobs";

function doGet(e) {
  const action = e.parameter.action || "getAll";
  
  try {
    switch (action) {
      case "getAll":
        return respond(getAllJobs());
      case "getActive":
        return respond(getActiveJobs());
      case "get":
        return respond(getJob(e.parameter.id));
      default:
        return respond({ error: "Unknown action" }, 400);
    }
  } catch (err) {
    return respond({ error: err.message }, 500);
  }
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const action = data.action;
  
  try {
    switch (action) {
      case "create":
        return respond(createJob(data.job));
      case "update":
        return respond(updateJob(data.id, data.job));
      case "delete":
        return respond(deleteJob(data.id));
      case "toggle":
        return respond(toggleJob(data.id));
      case "apply":
        return respond(saveApplication(data.application));
      default:
        return respond({ error: "Unknown action" }, 400);
    }
  } catch (err) {
    return respond({ error: err.message }, 500);
  }
}

// ═══ JOBS CRUD ═══

function getAllJobs() {
  const sheet = getSheet(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  
  const headers = data[0];
  const jobs = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (!row[0]) continue; // skip empty rows
    jobs.push(rowToJob(headers, row));
  }
  
  return jobs;
}

function getActiveJobs() {
  return getAllJobs().filter(job => job.isActive === true);
}

function getJob(id) {
  const jobs = getAllJobs();
  return jobs.find(j => j.id === id) || null;
}

function createJob(job) {
  const sheet = getSheet(SHEET_NAME);
  const id = generateId(job.title);
  const now = new Date().toISOString();
  
  const row = [
    id,
    job.title || "",
    job.department || "",
    job.location || "Remote",
    job.type || "Full-Time",
    job.experience || "",
    job.description || "",
    JSON.stringify(job.responsibilities || []),
    JSON.stringify(job.requirements || []),
    JSON.stringify(job.preferred || []),
    JSON.stringify(job.benefits || []),
    true,
    now
  ];
  
  sheet.appendRow(row);
  return { success: true, id: id };
}

function updateJob(id, updates) {
  const sheet = getSheet(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      // Update fields
      if (updates.title !== undefined) sheet.getRange(i + 1, 2).setValue(updates.title);
      if (updates.department !== undefined) sheet.getRange(i + 1, 3).setValue(updates.department);
      if (updates.location !== undefined) sheet.getRange(i + 1, 4).setValue(updates.location);
      if (updates.type !== undefined) sheet.getRange(i + 1, 5).setValue(updates.type);
      if (updates.experience !== undefined) sheet.getRange(i + 1, 6).setValue(updates.experience);
      if (updates.description !== undefined) sheet.getRange(i + 1, 7).setValue(updates.description);
      if (updates.responsibilities !== undefined) sheet.getRange(i + 1, 8).setValue(JSON.stringify(updates.responsibilities));
      if (updates.requirements !== undefined) sheet.getRange(i + 1, 9).setValue(JSON.stringify(updates.requirements));
      if (updates.preferred !== undefined) sheet.getRange(i + 1, 10).setValue(JSON.stringify(updates.preferred));
      if (updates.benefits !== undefined) sheet.getRange(i + 1, 11).setValue(JSON.stringify(updates.benefits));
      if (updates.isActive !== undefined) sheet.getRange(i + 1, 12).setValue(updates.isActive);
      
      return { success: true };
    }
  }
  
  return { error: "Job not found" };
}

function deleteJob(id) {
  const sheet = getSheet(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      sheet.deleteRow(i + 1);
      return { success: true };
    }
  }
  
  return { error: "Job not found" };
}

function toggleJob(id) {
  const sheet = getSheet(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      const currentStatus = data[i][11];
      const newStatus = !currentStatus;
      sheet.getRange(i + 1, 12).setValue(newStatus);
      return { success: true, isActive: newStatus };
    }
  }
  
  return { error: "Job not found" };
}

// ═══ APPLICATIONS ═══

function saveApplication(app) {
  let sheet;
  try {
    sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Applications");
  } catch (e) {}
  
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Applications");
    sheet.appendRow(["id", "jobId", "jobTitle", "name", "email", "phone", "location", "experience", "linkedin", "resumeLink", "message", "submittedAt"]);
  }
  
  // Save resume file to Google Drive if provided
  var resumeLink = "";
  if (app.resumeData && app.resumeName) {
    try {
      var folder = getOrCreateFolder("Accuriantech Resumes");
      var decoded = Utilities.base64Decode(app.resumeData);
      var blob = Utilities.newBlob(decoded, app.resumeMime || "application/pdf", app.resumeName);
      var file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      resumeLink = file.getUrl();
    } catch (e) {
      resumeLink = "Upload failed: " + e.message;
    }
  }
  
  var id = Utilities.getUuid();
  var now = new Date().toISOString();
  
  sheet.appendRow([
    id,
    app.jobId || "",
    app.jobTitle || "",
    app.name || "",
    app.email || "",
    app.phone || "",
    app.location || "",
    app.experience || "",
    app.linkedin || "",
    resumeLink,
    app.message || "",
    now
  ]);
  
  // Send notification email
  try {
    MailApp.sendEmail({
      to: "info@accuriantech.com",
      subject: "New Application: " + app.jobTitle + " — " + app.name,
      body: "New application received:\n\nPosition: " + app.jobTitle + "\nName: " + app.name + "\nEmail: " + app.email + "\nPhone: " + app.phone + "\nExperience: " + app.experience + "\nLinkedIn: " + app.linkedin + "\nResume: " + resumeLink + "\nMessage: " + app.message + "\n\nSubmitted: " + now
    });
  } catch (e) {
    // Email send failed, but application is saved
  }
  
  return { success: true, id: id };
}

function getOrCreateFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(folderName);
}

// ═══ HELPERS ═══

function getSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(["id", "title", "department", "location", "type", "experience", "description", "responsibilities", "requirements", "preferred", "benefits", "isActive", "createdAt"]);
  }
  
  return sheet;
}

function rowToJob(headers, row) {
  return {
    id: row[0],
    title: row[1],
    department: row[2],
    location: row[3],
    type: row[4],
    experience: row[5],
    description: row[6],
    responsibilities: parseJSON(row[7]),
    requirements: parseJSON(row[8]),
    preferred: parseJSON(row[9]),
    benefits: parseJSON(row[10]),
    isActive: row[11] === true || row[11] === "TRUE" || row[11] === "true",
    createdAt: row[12],
  };
}

function parseJSON(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  try {
    return JSON.parse(val);
  } catch (e) {
    return [];
  }
}

function generateId(title) {
  const base = (title || "job").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const suffix = Math.random().toString(36).substring(2, 6);
  return `${base}-${suffix}`;
}

function respond(data, status) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ═══ SETUP: Run once to initialize ═══
function setup() {
  getSheet(SHEET_NAME);
  Logger.log("Jobs sheet created/verified.");
}
