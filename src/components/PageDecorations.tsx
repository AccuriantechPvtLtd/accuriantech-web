/** Lightweight static decorative ornaments – no JS animations */
export const PageOrnaments = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
    <div
      className="absolute -top-8 right-[8%] w-36 h-36"
      style={{ border: `1.5px solid hsl(${color} / 0.07)`, borderRadius: "20px", transform: "rotate(12deg)" }}
    />
    <div
      className="absolute top-[30%] left-[5%] w-20 h-20 rounded-full"
      style={{ border: `1px solid hsl(${color} / 0.06)` }}
    />
    <div
      className="absolute top-[55%] right-[12%] w-12 h-12"
      style={{ border: `1px solid hsl(${color} / 0.05)`, borderRadius: "6px", transform: "rotate(30deg)" }}
    />
    <div
      className="absolute -bottom-16 left-[15%] w-48 h-48 rounded-full"
      style={{ border: `1px solid hsl(${color} / 0.04)` }}
    />
  </div>
);

/** Static section divider */
export const SectionDivider = ({ color, flip = false }: { color: string; flip?: boolean }) => (
  <div className="relative py-4 overflow-hidden" aria-hidden>
    <svg viewBox="0 0 1200 40" className="w-full h-8" preserveAspectRatio="none" style={{ transform: flip ? "scaleY(-1)" : undefined }}>
      <path
        d="M0,20 C200,5 400,35 600,20 C800,5 1000,35 1200,20"
        fill="none"
        stroke={`hsl(${color} / 0.12)`}
        strokeWidth="1.5"
      />
    </svg>
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
      style={{ background: `hsl(${color} / 0.25)` }}
    />
  </div>
);
