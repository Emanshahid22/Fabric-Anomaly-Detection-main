import React from "react";
import Reveal from "./Reveal";
import { WHY_CARDS } from "./data";

export default function WhySection() {
  return (
    <section id="why" className="relative z-10 px-5 md:px-10 lg:px-16 py-24 lg:py-28 text-center">
      <Reveal distance={14} className="inline-flex items-center gap-2.5 px-4 py-2 border border-accent/50 bg-accent/[0.08] font-mono text-xs tracking-[1.8px] text-accentBright uppercase mb-6">
        Zero-Shot &middot; Pixel-Level
      </Reveal>
      <Reveal delay={60} as="h2" className="font-display font-bold text-[clamp(34px,4.6vw,58px)] leading-[1.05] tracking-tight uppercase mb-5">
        Why Traditional Inspection
        <br />
        <span className="text-accentBright italic">Is No Longer Enough</span>
      </Reveal>
      <Reveal delay={120} as="p" className="text-base text-muted max-w-[560px] mx-auto mb-16">
        Manual QC hits a wall long before defects do. Pixel-level, zero-shot
        detection removes the ceiling.
      </Reveal>

      <div className="flex gap-[22px] flex-wrap justify-center text-left">
        {WHY_CARDS.map((c, i) => (
          <Reveal
            key={c.num}
            delay={i * 100}
            className="relative flex-1 min-w-[280px] max-w-[360px] bg-panel border border-hairline/45 p-8 overflow-hidden transition-all hover:border-accent/70 hover:-translate-y-1"
          >
            <div className="w-[46px] h-[46px] border border-accent/50 bg-accent/[0.08] flex items-center justify-center mb-[22px] text-accentBright">
              <c.icon size={22} strokeWidth={1.7} />
            </div>
            <div className="absolute top-6 right-7 font-mono text-[34px] font-semibold text-hairline/60">
              {c.num}
            </div>
            <div className="w-[26px] h-0.5 bg-accentBright mb-3.5" />
            <h3 className="font-display font-semibold text-xl tracking-wide uppercase mb-3">
              {c.title}
            </h3>
            <p className="text-[14.5px] leading-relaxed text-muted mb-6">{c.desc}</p>
            <div className="grid grid-cols-6 gap-[5px]">
              {Array.from({ length: 12 }, (_, k) => (
                <div key={k} className="w-[5px] h-[5px] bg-accent/40" />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
