import { Helmet } from "react-helmet-async";

export interface BreadcrumbItem {
  name: string;
  /** Path relative to site root, e.g. `/services/salesforce`. */
  path: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
  /** Optional additional structured-data blocks (FAQPage, Service offers, etc.). */
  jsonLdExtra?: Record<string, unknown>[];
  /** When provided, a BreadcrumbList JSON-LD block is emitted. */
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = "https://accuriantech.com";

const SEOHead = ({
  title,
  description,
  canonical,
  type = "website",
  keywords,
  jsonLd,
  jsonLdExtra,
  breadcrumbs,
}: SEOHeadProps) => {
  const logoUrl = `${SITE_URL}/logo.png`;
  const fullTitle = title.includes("Accuriantech") ? title : `${title} | Accuriantech`;

  const breadcrumbLd = breadcrumbs && breadcrumbs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: b.name,
          item: b.path.startsWith("http") ? b.path : `${SITE_URL}${b.path}`,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:site_name" content="Accuriantech" />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {breadcrumbLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      )}
      {jsonLdExtra && jsonLdExtra.map((block, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
