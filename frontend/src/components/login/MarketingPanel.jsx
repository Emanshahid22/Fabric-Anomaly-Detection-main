import React from "react";
import { motion } from "framer-motion";
import Logo from "../landing/Logo";
import { FEATURES, WAVE_DOTS } from "./data";

// Left column: brand mark, headline, and feature list. Order is flipped to
// appear after the login card on narrow screens via the `order` utility.
export default function MarketingPanel() {
  return (
    <div className="relative z-10 flex flex-col justify-center px-6 py-14 split:px-12 lg:px-16 split:py-14 bg-[linear-gradient(oklch(0.32_0.02_45_/_0.14)_1px,transparent_1px),linear-gradient(90deg,oklch(0.32_0.02_45_/_0.14)_1px,transparent_1px)] bg-[size:40px_40px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1] }}
      >
        <div className="flex items-center gap-2.5 mb-1.5">
          <Logo size={30} />
          <span className="font-display font-semibold text-[19px] tracking-wide uppercase">
            ZSAD <span className="text-accentBright">Inspector</span>
          </span>
        </div>
        <div className="font-mono text-[11.5px] tracking-[2px] text-mutedDark uppercase ml-10 mb-10">
          AI Powered Textile Inspection
        </div>

        <h1 className="font-display font-bold text-[clamp(36px,3.6vw,52px)] leading-[1.02] tracking-tight uppercase mb-5">
          Intelligent
          <br />
          <span className="text-accentBright">Inspection.</span>
          <br />
          Flawless
          <br />
          Fabrics.
        </h1>
        <div className="w-14 h-[3px] bg-accentBright mb-5" />
        <p className="text-[15.5px] leading-relaxed text-muted max-w-[420px] mb-10">
          ZSAD Inspector uses Pixel-Level Zero-Shot Anomaly Detection to
          identify textile defects with unmatched speed and accuracy.
        </p>

        <div className="flex flex-col gap-5">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full border border-accent/55 bg-accent/[0.08] flex items-center justify-center text-accentBright">
                <Icon size={20} strokeWidth={1.7} />
              </div>
              <div>
                <div className="font-display font-semibold text-[15px] tracking-wide uppercase mb-1">
                  {title}
                </div>
                <div className="text-[13.5px] leading-snug text-muted max-w-[360px]">
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <svg
        className="absolute left-0 bottom-0 w-full h-[180px] opacity-55 pointer-events-none"
        viewBox="0 0 800 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 140 Q 100 100 200 130 T 400 120 T 600 140 T 800 110"
          stroke="oklch(0.68 0.19 40 / 0.5)"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M0 160 Q 100 120 200 150 T 400 140 T 600 160 T 800 130"
          stroke="oklch(0.68 0.19 40 / 0.3)"
          strokeWidth="1"
          fill="none"
        />
        {WAVE_DOTS.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="oklch(0.75 0.20 45 / 0.6)" />
        ))}
      </svg>
    </div>
  );
}
