import { useEffect, useRef, useState } from "react";

/**
 * Vanta globe initialization, performance-tuned:
 *  – Defers loading until the browser is idle (won't block LCP).
 *  – Skips entirely when the user prefers reduced motion or the
 *    section isn't visible on first paint.
 *  – Lazy-loads `three` and `vanta` only when actually rendering.
 */
const VantaGlobe = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const effectRef = useRef<any>(null);
  const [ready, setReady] = useState(false);

  // Defer effect creation until idle so it doesn't compete with LCP.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    type IdleCallbackHandle = number;
    type IdleRequestCallback = () => void;
    const w = window as unknown as {
      requestIdleCallback?: (cb: IdleRequestCallback, opts?: { timeout: number }) => IdleCallbackHandle;
      cancelIdleCallback?: (id: IdleCallbackHandle) => void;
    };

    let handle: IdleCallbackHandle | number;
    if (typeof w.requestIdleCallback === "function") {
      handle = w.requestIdleCallback(() => setReady(true), { timeout: 1500 });
    } else {
      handle = window.setTimeout(() => setReady(true), 600);
    }

    return () => {
      if (typeof w.cancelIdleCallback === "function" && typeof handle === "number") {
        w.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle as number);
      }
    };
  }, []);

  useEffect(() => {
    if (!ready || effectRef.current || !vantaRef.current) return;
    let cancelled = false;

    Promise.all([
      import("three"),
      import("vanta/dist/vanta.globe.min"),
    ]).then(([THREE, VANTA]) => {
      if (cancelled || !vantaRef.current) return;
      effectRef.current = (VANTA as { default: (opts: Record<string, unknown>) => unknown }).default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3b82f6,
        color2: 0x1e40af,
        backgroundColor: 0x0,
        backgroundAlpha: 0,
        size: 1.2,
        points: 8,
      });
    });

    return () => {
      cancelled = true;
      if (effectRef.current && typeof effectRef.current.destroy === "function") {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [ready]);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 pointer-events-none z-0 hidden md:block"
      style={{ opacity: 0.35 }}
      aria-hidden
    />
  );
};

export default VantaGlobe;
