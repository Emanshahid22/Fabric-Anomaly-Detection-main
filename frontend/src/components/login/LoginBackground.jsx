import React from "react";
import { motion } from "framer-motion";

// Two soft orange blobs that drift on an infinite loop behind the split
// layout. Purely decorative — sits behind both columns.
export default function LoginBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -top-40 -left-32 w-[480px] h-[480px] rounded-full blur-[20px]"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.19 40 / 0.14), transparent 70%)",
        }}
        animate={{ x: [0, 24, 0], y: [0, -30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-52 -right-40 w-[560px] h-[560px] rounded-full blur-[24px]"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.19 40 / 0.10), transparent 70%)",
        }}
        animate={{ x: [0, -24, 0], y: [0, 30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
