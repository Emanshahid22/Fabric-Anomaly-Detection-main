import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Two soft blurred orange blobs that drift on an infinite loop and shift
// slightly with scroll (parallax). The looping drift and the scroll-driven
// offset are split across two nested nodes so Framer Motion doesn't have to
// fight itself animating the same transform from two sources.
export default function Background() {
  const { scrollY } = useScroll();
  const parallaxA = useTransform(scrollY, [0, 2400], [0, 260]);
  const parallaxB = useTransform(scrollY, [0, 2400], [0, -180]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div style={{ y: parallaxA }} className="absolute -top-32 -left-40 w-[520px] h-[520px]">
        <motion.div
          className="w-full h-full rounded-full blur-[20px]"
          style={{
            background: "radial-gradient(circle, oklch(0.68 0.19 40 / 0.16), transparent 70%)",
          }}
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div style={{ y: parallaxB }} className="absolute top-[900px] -right-52 w-[600px] h-[600px]">
        <motion.div
          className="w-full h-full rounded-full blur-[24px]"
          style={{
            background: "radial-gradient(circle, oklch(0.68 0.19 40 / 0.12), transparent 70%)",
          }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
