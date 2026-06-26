/**
 * Subtle CSS-only background — soft gradient blobs that
 * slowly drift. No canvas, no performance hit, always visible.
 */

const CursorBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Blob 1 — top left */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.15] animate-blob-1"
        style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
      />
      {/* Blob 2 — top right */}
      <div
        className="absolute -top-[10%] -right-[15%] w-[600px] h-[600px] rounded-full opacity-[0.1] animate-blob-2"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)" }}
      />
      {/* Blob 3 — center */}
      <div
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.08] animate-blob-3"
        style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }}
      />
      {/* Blob 4 — bottom right */}
      <div
        className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full opacity-[0.12] animate-blob-1"
        style={{ background: "radial-gradient(circle, #1D4ED8, transparent 70%)" }}
      />

      {/* Static dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #2563EB 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};

export default CursorBackground;
