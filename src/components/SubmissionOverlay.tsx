import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

/**
 * SubmissionOverlay — Premium animated loading overlay for form submissions.
 * Features a paper-plane launch with particle burst and morphing text.
 */

interface SubmissionOverlayProps {
  visible: boolean;
  message?: string;
}

const SubmissionOverlay = ({ visible, message = "Sending..." }: SubmissionOverlayProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md rounded-xl overflow-hidden"
        >
          {/* Background ripple rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute rounded-full border border-[#2563EB]/10"
              initial={{ width: 40, height: 40, opacity: 0.8 }}
              animate={{
                width: [40, 200 + i * 60],
                height: [40, 200 + i * 60],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Main animation container */}
          <div className="relative w-24 h-24 flex items-center justify-center mb-4">
            {/* Glowing backdrop */}
            <motion.div
              className="absolute w-16 h-16 rounded-full bg-[#2563EB]/10"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Paper plane icon — launching upward */}
            <motion.div
              initial={{ y: 20, opacity: 0, rotate: 0 }}
              animate={{
                y: [20, -5, -5, -60],
                opacity: [0, 1, 1, 0],
                rotate: [0, -10, -10, -45],
                scale: [0.8, 1.1, 1.1, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                times: [0, 0.25, 0.7, 1],
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Send size={28} className="text-[#2563EB]" strokeWidth={2} />
            </motion.div>

            {/* Particle burst — fires when plane launches */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * 35;
              const y = Math.sin(rad) * 35;
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "#2563EB" : "#60A5FA",
                  }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x: [0, x * 0.5, x],
                    y: [0, y * 0.5, y],
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    delay: 1.4 + i * 0.04,
                    ease: "easeOut",
                  }}
                />
              );
            })}

            {/* Sparkle dots — ambient */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={`spark-${i}`}
                className="absolute w-1 h-1 rounded-full bg-[#2563EB]/60"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Message with typewriter-style dots */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-1.5"
          >
            <span className="text-[14px] font-semibold text-[#1E293B] tracking-wide">
              {message}
            </span>
            <span className="flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full bg-[#2563EB]"
                  animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </span>
          </motion.div>

          {/* Slim progress track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 w-32 h-1 rounded-full bg-[#E2E8F0] overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "50%" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubmissionOverlay;
