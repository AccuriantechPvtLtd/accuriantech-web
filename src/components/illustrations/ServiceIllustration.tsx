/**
 * Custom, enterprise-style SVG illustrations — one per service.
 *
 * Each illustration is a small composed scene (not a single icon) rendered
 * in the AccurianTech blue family. Color is driven by the per-card accent
 * HSL string so every card stays on-theme while remaining distinct.
 *
 * Pure SVG: scalable, crisp on retina, lightweight, no binary assets.
 */

interface Props {
  slug: string;
  /** HSL triplet, e.g. "215 85% 55%". */
  color: string;
  className?: string;
}

const ServiceIllustration = ({ slug, color, className }: Props) => {
  const c = `hsl(${color})`;
  const soft = `hsl(${color} / 0.16)`;
  const softer = `hsl(${color} / 0.10)`;
  const line = `hsl(${color} / 0.45)`;

  const common = {
    viewBox: "0 0 220 140",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    role: "img" as const,
    "aria-hidden": true,
  };

  switch (slug) {
    /* ─── AI Solutions: neural-network brain ─── */
    case "ai-solutions":
      return (
        <svg {...common}>
          <circle cx="110" cy="70" r="46" fill={softer} />
          <circle cx="110" cy="70" r="46" stroke={line} strokeWidth="1" strokeDasharray="3 4" />
          {/* nodes */}
          {[
            [110, 42], [86, 58], [134, 58], [78, 84], [142, 84],
            [110, 70], [98, 96], [122, 96],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 5 ? 6 : 4} fill={c} />
          ))}
          {/* connections */}
          <g stroke={c} strokeWidth="1.6" opacity="0.7">
            <line x1="110" y1="42" x2="86" y2="58" />
            <line x1="110" y1="42" x2="134" y2="58" />
            <line x1="86" y1="58" x2="78" y2="84" />
            <line x1="134" y1="58" x2="142" y2="84" />
            <line x1="86" y1="58" x2="110" y2="70" />
            <line x1="134" y1="58" x2="110" y2="70" />
            <line x1="110" y1="70" x2="98" y2="96" />
            <line x1="110" y1="70" x2="122" y2="96" />
            <line x1="78" y1="84" x2="98" y2="96" />
            <line x1="142" y1="84" x2="122" y2="96" />
          </g>
        </svg>
      );

    /* ─── Software Development: code window ─── */
    case "software-development":
      return (
        <svg {...common}>
          <rect x="48" y="34" width="124" height="78" rx="10" fill={softer} stroke={line} strokeWidth="1.5" />
          <line x1="48" y1="50" x2="172" y2="50" stroke={line} strokeWidth="1.5" />
          <circle cx="58" cy="42" r="2.6" fill={c} />
          <circle cx="67" cy="42" r="2.6" fill={soft} />
          <circle cx="76" cy="42" r="2.6" fill={soft} />
          {/* code brackets */}
          <path d="M92 64 L80 78 L92 92" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M128 64 L140 78 L128 92" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="104" y1="94" x2="116" y2="62" stroke={c} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    /* ─── Salesforce: cloud CRM with linked contacts ─── */
    case "salesforce":
      return (
        <svg {...common}>
          <path
            d="M86 86 a18 18 0 0 1 4 -35 a24 24 0 0 1 46 6 a16 16 0 0 1 -3 31 Z"
            fill={softer}
            stroke={line}
            strokeWidth="1.5"
          />
          <circle cx="74" cy="104" r="9" fill={soft} stroke={c} strokeWidth="1.5" />
          <circle cx="110" cy="112" r="9" fill={soft} stroke={c} strokeWidth="1.5" />
          <circle cx="146" cy="104" r="9" fill={soft} stroke={c} strokeWidth="1.5" />
          <g stroke={c} strokeWidth="1.6" opacity="0.7">
            <line x1="92" y1="78" x2="74" y2="96" />
            <line x1="110" y1="84" x2="110" y2="103" />
            <line x1="128" y1="78" x2="146" y2="96" />
          </g>
          <circle cx="74" cy="101" r="3" fill={c} />
          <circle cx="110" cy="109" r="3" fill={c} />
          <circle cx="146" cy="101" r="3" fill={c} />
        </svg>
      );

    /* ─── Power BI & Analytics: dashboard bars + trend line ─── */
    case "powerbi":
      return (
        <svg {...common}>
          <rect x="50" y="36" width="120" height="74" rx="8" fill={softer} stroke={line} strokeWidth="1.5" />
          <rect x="64" y="80" width="12" height="20" rx="2" fill={soft} />
          <rect x="84" y="68" width="12" height="32" rx="2" fill={c} />
          <rect x="104" y="74" width="12" height="26" rx="2" fill={soft} />
          <rect x="124" y="58" width="12" height="42" rx="2" fill={c} />
          <rect x="144" y="66" width="12" height="34" rx="2" fill={soft} />
          <polyline
            points="64,62 84,54 104,58 124,46 156,50"
            fill="none"
            stroke={c}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[[64, 62], [84, 54], [104, 58], [124, 46], [156, 50]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.8" fill={c} />
          ))}
        </svg>
      );

    /* ─── Cloud Solutions: cloud + sync ─── */
    case "cloud":
      return (
        <svg {...common}>
          <path
            d="M78 92 a20 20 0 0 1 3 -39 a26 26 0 0 1 50 5 a18 18 0 0 1 -2 34 Z"
            fill={softer}
            stroke={c}
            strokeWidth="1.8"
          />
          <path d="M104 70 l0 18 M104 70 l-6 6 M104 70 l6 6" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M120 92 l0 -18 M120 92 l-6 -6 M120 92 l6 -6" stroke={line} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="70" y="104" width="80" height="6" rx="3" fill={soft} />
        </svg>
      );

    /* ─── Managed IT: server stack + gear ─── */
    case "managed-it":
      return (
        <svg {...common}>
          <rect x="62" y="42" width="96" height="22" rx="5" fill={softer} stroke={line} strokeWidth="1.5" />
          <rect x="62" y="70" width="96" height="22" rx="5" fill={softer} stroke={line} strokeWidth="1.5" />
          <circle cx="74" cy="53" r="3" fill={c} />
          <circle cx="74" cy="81" r="3" fill={c} />
          <line x1="86" y1="53" x2="120" y2="53" stroke={line} strokeWidth="2" strokeLinecap="round" />
          <line x1="86" y1="81" x2="120" y2="81" stroke={line} strokeWidth="2" strokeLinecap="round" />
          {/* gear */}
          <g transform="translate(140,96)">
            <circle r="13" fill={soft} stroke={c} strokeWidth="1.8" />
            <circle r="4.5" fill={c} />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <rect key={a} x="-1.6" y="-15.5" width="3.2" height="5" rx="1" fill={c} transform={`rotate(${a})`} />
            ))}
          </g>
        </svg>
      );

    /* ─── Network & Security: shield + check + nodes ─── */
    case "network-security":
      return (
        <svg {...common}>
          <path
            d="M110 36 l34 13 v24 c0 23 -16 35 -34 41 c-18 -6 -34 -18 -34 -41 V49 Z"
            fill={softer}
            stroke={c}
            strokeWidth="1.8"
          />
          <path d="M96 72 l10 11 l20 -23" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <g stroke={line} strokeWidth="1.4" opacity="0.7">
            <line x1="76" y1="56" x2="58" y2="56" />
            <line x1="144" y1="56" x2="162" y2="56" />
          </g>
          <circle cx="56" cy="56" r="3.4" fill={c} />
          <circle cx="164" cy="56" r="3.4" fill={c} />
        </svg>
      );

    /* ─── ServiceNow: connected workflow ─── */
    case "servicenow":
      return (
        <svg {...common}>
          <g stroke={c} strokeWidth="1.8" opacity="0.7">
            <line x1="72" y1="58" x2="110" y2="58" />
            <line x1="110" y1="58" x2="110" y2="90" />
            <line x1="110" y1="90" x2="148" y2="90" />
            <line x1="110" y1="58" x2="148" y2="58" />
          </g>
          <rect x="52" y="46" width="24" height="24" rx="6" fill={soft} stroke={c} strokeWidth="1.8" />
          <rect x="98" y="46" width="24" height="24" rx="6" fill={c} />
          <rect x="144" y="46" width="24" height="24" rx="6" fill={soft} stroke={c} strokeWidth="1.8" />
          <rect x="98" y="78" width="24" height="24" rx="6" fill={soft} stroke={c} strokeWidth="1.8" />
          <rect x="144" y="78" width="24" height="24" rx="6" fill={soft} stroke={c} strokeWidth="1.8" />
        </svg>
      );

    /* ─── SAP Security: database stack + lock ─── */
    case "sap":
      return (
        <svg {...common}>
          <ellipse cx="98" cy="48" rx="30" ry="10" fill={soft} stroke={c} strokeWidth="1.6" />
          <path d="M68 48 v40 c0 5.5 13.4 10 30 10 s30 -4.5 30 -10 V48" fill={softer} stroke={c} strokeWidth="1.6" />
          <path d="M68 68 c0 5.5 13.4 10 30 10 s30 -4.5 30 -10" stroke={line} strokeWidth="1.4" fill="none" />
          {/* lock */}
          <g transform="translate(138,74)">
            <rect x="-14" y="0" width="28" height="22" rx="4" fill={c} />
            <path d="M-8 0 v-6 a8 8 0 0 1 16 0 v6" stroke={c} strokeWidth="3" fill="none" />
            <circle cx="0" cy="10" r="3" fill="#fff" />
          </g>
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="110" cy="72" r="34" fill={soft} stroke={c} strokeWidth="1.8" />
        </svg>
      );
  }
};

export default ServiceIllustration;
