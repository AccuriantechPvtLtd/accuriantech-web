/** Lightweight static page backdrop – no JS animations */
const PageBackdrop = ({ variant = "default" }: { variant?: "default" | "soft" | "contrast" }) => {
  const o = variant === "soft" ? 0.08 : variant === "contrast" ? 0.12 : 0.1;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute -top-28 -left-16 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: `hsl(202 98% 56% / ${o})` }}
      />
      <div
        className="absolute -right-24 top-1/3 h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{ background: `hsl(212 95% 60% / ${o * 0.9})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: o * 2,
          backgroundImage:
            "radial-gradient(circle at 25% 20%, hsl(201 100% 56% / 0.1), transparent 36%), radial-gradient(circle at 78% 65%, hsl(213 95% 58% / 0.09), transparent 34%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: o * 2,
          backgroundImage:
            "radial-gradient(hsl(217 35% 55% / 0.15) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
    </div>
  );
};

export default PageBackdrop;
