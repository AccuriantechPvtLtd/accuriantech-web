/** Lightweight static decorative background – no JS animations */
const AnimatedBackground = ({ variant = "light" }: { variant?: "light" | "dark" | "subtle" }) => {
  const isDark = variant === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Soft gradient orbs – pure CSS, no animation */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400, top: "-10%", right: "-5%",
          background: `radial-gradient(circle, hsl(217 91% 50% / ${isDark ? 0.1 : 0.05}), transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 350, height: 350, bottom: "-8%", left: "-3%",
          background: `radial-gradient(circle, hsl(210 80% 58% / ${isDark ? 0.08 : 0.04}), transparent 70%)`,
          filter: "blur(50px)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(217 92% 55% / ${isDark ? 0.03 : 0.02}) 1px, transparent 1px), linear-gradient(90deg, hsl(217 92% 55% / ${isDark ? 0.03 : 0.02}) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
