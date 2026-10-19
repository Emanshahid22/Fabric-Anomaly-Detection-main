import React from "react";
import Reveal from "./Reveal";
import { DEFECT_CATEGORIES } from "./data";

export default function DetectionModel() {
  return (
    <section
      id="detection"
      className="relative z-10 px-5 md:px-10 lg:px-16 py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start bg-panel"
    >
      <div className="lg:sticky lg:top-28">
        <Reveal distance={14} className="inline-flex items-center gap-2.5 px-4 py-2 border border-accent/50 bg-accent/[0.08] font-mono text-xs tracking-[1.8px] text-accentBright uppercase mb-6">
          Detection Model
        </Reveal>
        <Reveal delay={60} as="h2" className="font-display font-bold text-[clamp(32px,4.4vw,52px)] leading-[1.04] tracking-tight uppercase mb-5">
          Pixel-Level,
          <br />
          <span className="text-accentBright">Zero-Shot</span>
        </Reveal>
        <Reveal delay={100} className="w-[60px] h-0.5 bg-accentBright mb-5" />
        <Reveal delay={140} as="p" className="text-[15.5px] leading-relaxed text-muted mb-[18px]">
          The model carries no fixed defect list. It flags any region that
          departs from a fabric's own normal texture a hole, a stain, a
          broken thread, a color shift whether or not it has ever seen that
          exact flaw labeled before.
        </Reveal>
        <Reveal delay={200} as="p" className="text-[15.5px] leading-relaxed text-muted">
          Once flagged, a separate classifier names the region against 10
          universal textile defect categories — shown opposite — or marks it{" "}
          <span className="text-success">Good Fabric</span> when nothing
          departs from the norm.
        </Reveal>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {DEFECT_CATEGORIES.map((d, i) => (
            <Reveal
              key={d.num}
              delay={(i % 2) * 60 + Math.floor(i / 2) * 50}
              distance={14}
              className="flex items-center gap-3.5 bg-ink border border-hairline/45 px-5 py-[18px] transition-colors hover:border-accent/70 hover:bg-panelHover"
            >
              <span className="font-mono text-xs text-mutedDark">{d.num}</span>
              <div className="w-[38px] h-[38px] rounded-full border border-accent/50 flex items-center justify-center shrink-0 text-accentBright">
                <d.icon size={18} strokeWidth={1.7} />
              </div>
              <span className="font-display font-semibold text-[15px] tracking-wide uppercase">
                {d.label}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260} className="mt-3.5 flex items-center justify-between gap-4 bg-success/[0.08] border border-success/50 px-6 py-5 flex-wrap">
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 rounded-full border border-success flex items-center justify-center text-success">
              ✓
            </div>
            <span className="font-mono text-[13px] text-mutedDark">
              — no departure from normal weave
            </span>
          </div>
          <span className="font-display font-semibold text-[15px] tracking-wide uppercase text-success">
            Good Fabric (No Anomaly)
          </span>
        </Reveal>
      </div>
    </section>
  );
}
