import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { FEATURE_STRIP, ANOMALY_DOTS } from "./data";
import { scrollToSection } from "../../lib/scrollTo";

const TARGET_SCORE = 0.87;

export default function Hero() {
  const [score, setScore] = useState(0);
  const startedRef = useRef(false);

  function startCountUp() {
    if (startedRef.current) return;
    startedRef.current = true;
    const duration = 1400;
    const t0 = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setScore(eased * TARGET_SCORE);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  return (
    <section
      id="hero"
      className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center px-5 md:px-10 lg:px-16 pt-20 pb-16 lg:pt-24 bg-grid-lg"
    >
      <div>
        <Reveal distance={14} className="inline-flex items-center gap-2.5 px-4 py-2 border border-accent/50 bg-accent/[0.08] font-mono text-xs tracking-[1.8px] text-accentBright uppercase mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-accentBright animate-pulse-glow" />
          Zero-Shot &middot; Pixel-Level
        </Reveal>

        <Reveal delay={60} as="h1" className="font-display font-bold text-[clamp(48px,6.2vw,92px)] leading-[0.98] tracking-tight uppercase mb-6">
          Automated
          <br />
          <span className="text-accentBright">Anomaly</span>
          <br />
          Detection
        </Reveal>

        <Reveal delay={140} as="p" className="text-[17px] leading-relaxed text-muted max-w-[520px] mb-9">
          Every patch of fabric is checked against its own surrounding weave  no
          fixed defect list, no per-fabric retraining. A universal classifier then
          names what it finds across 10 standard textile defect categories.
        </Reveal>

        <Reveal delay={200} className="flex gap-3.5 flex-wrap mb-14">
          <Link
            to="/login"
            className="inline-flex items-center gap-2.5 bg-accent text-ink px-[26px] py-4 font-mono font-semibold text-[13.5px] tracking-[1.2px] uppercase clip-corner transition-colors hover:bg-accentBright"
          >
            Start Inspection <ArrowRight size={16} />
          </Link>
          <button
            onClick={() => scrollToSection("detection")}
            className="inline-flex items-center gap-2.5 bg-transparent text-text border border-hairline/60 px-[26px] py-4 font-mono font-semibold text-[13.5px] tracking-[1.2px] uppercase transition-colors hover:border-accentBright hover:text-accentBright"
          >
            Explore Defect Categories
          </button>
        </Reveal>

        <Reveal delay={260} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline/35 border border-hairline/35">
          {FEATURE_STRIP.map((f) => (
            <div key={f.label} className="bg-ink px-5 py-[18px]">
              <div className="font-mono text-[11px] tracking-[1.2px] text-accentBright uppercase mb-1.5">
                {f.label}
              </div>
              <div className="text-[13px] text-muted">{f.desc}</div>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal delay={120} distance={34} onViewportEnter={startCountUp} className="relative bg-panel border border-hairline/50 p-[22px]">
        <span className="absolute -top-px -left-px w-[18px] h-[18px] border-t-2 border-l-2 border-accentBright" />
        <span className="absolute -top-px -right-px w-[18px] h-[18px] border-t-2 border-r-2 border-accentBright" />
        <span className="absolute -bottom-px -left-px w-[18px] h-[18px] border-b-2 border-l-2 border-accentBright" />
        <span className="absolute -bottom-px -right-px w-[18px] h-[18px] border-b-2 border-r-2 border-accentBright" />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[1.4px] uppercase">
            <span className="w-[7px] h-[7px] rounded-full bg-success animate-pulse-glow-green" />
            Live Scan
          </div>
          <div className="font-mono text-[11px] text-mutedDark border border-hairline/50 px-2.5 py-1">
            37 &times; 37 GRID
          </div>
        </div>

        <div className="relative overflow-hidden bg-inkDeep border border-hairline/40 h-[280px] bg-grid-sm">
          <motion.div
            className="absolute left-0 right-0 h-[70px]"
            style={{
              background:
                "linear-gradient(oklch(0.75 0.20 45 / 0), oklch(0.75 0.20 45 / 0.12), oklch(0.75 0.20 45 / 0))",
            }}
            animate={{ top: ["-70px", "350px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          {ANOMALY_DOTS.map((d, i) => (
            <span
              key={i}
              className="absolute border border-accentBright animate-pulse-glow"
              style={{
                top: d.top,
                left: d.left,
                width: d.size,
                height: d.size,
                background: d.main
                  ? "oklch(0.75 0.20 45 / 0.35)"
                  : "oklch(0.75 0.20 45 / 0.12)",
              }}
            />
          ))}
        </div>

        <div className="flex justify-between mt-[18px]">
          <div>
            <div className="font-mono text-[11px] tracking-[1.2px] text-mutedDark uppercase mb-1.5">
              System Status
            </div>
            <div className="flex items-center gap-1.5 text-success font-mono font-semibold text-[15px]">
              ● Active
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[11px] tracking-[1.2px] text-mutedDark uppercase mb-1.5">
              Anomaly Score
            </div>
            <div className="font-display font-bold text-[34px] text-accentBright leading-none">
              {score.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="mt-3.5">
          <div className="h-[5px] bg-hairline/50 relative">
            <div
              className="h-full bg-accentBright"
              style={{ width: `${(score / 1) * 100}%`, transition: "width 0.1s linear" }}
            />
          </div>
          <div className="flex justify-between font-mono text-[10.5px] text-mutedDark mt-1.5">
            <span>0</span>
            <span>0.5</span>
            <span>1.0</span>
          </div>
        </div>

        <div className="text-center mt-4 pt-3.5 border-t border-hairline/35 font-mono text-[11px] tracking-[1.2px] text-mutedDark">
          kNN &middot; Wasserstein &middot; Centroid — fused
        </div>
      </Reveal>
    </section>
  );
}
