import React from "react";
import { UserRound, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { TEAM } from "./data";

export default function TeamSection() {
  return (
    <section id="team" className="relative z-10 px-5 md:px-10 lg:px-16 py-24 lg:py-28 text-center">
      <Reveal distance={14} className="inline-flex items-center gap-2.5 px-4 py-2 border border-accent/50 bg-accent/[0.08] font-mono text-xs tracking-[1.8px] text-accentBright uppercase mb-6">
        The Team
      </Reveal>
      <Reveal delay={60} as="h2" className="font-display font-bold text-[clamp(32px,4.4vw,52px)] tracking-tight uppercase mb-5">
        Research Team
      </Reveal>
      <Reveal delay={120} as="p" className="text-base text-muted mb-[60px]">
        The people behind the detection model.
      </Reveal>

      <div className="flex gap-5 flex-wrap justify-center">
        {TEAM.map((m, i) => (
          <Reveal
            key={m.id}
            delay={i * 90}
            className="w-[250px] bg-panel border border-hairline/45 px-6 py-8 transition-all hover:border-accent/70 hover:-translate-y-1"
          >
            <div className="w-[76px] h-[76px] rounded-full border border-accent/60 flex items-center justify-center mx-auto mb-5 text-accentBright">
              <UserRound size={34} strokeWidth={1.6} />
            </div>
            <h3 className="font-display font-semibold text-[16px] tracking-wide uppercase mb-1.5">
              {m.name}
            </h3>
            <div className="font-mono text-xs text-mutedDark uppercase tracking-wide mb-1">
              Research Contributor
            </div>
            <div className="font-mono text-[13px] text-accentBright mb-[18px]">{m.id}</div>
            <div className="flex justify-center gap-2.5">
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="w-[30px] h-[30px] border border-hairline/60 flex items-center justify-center text-muted transition-colors hover:border-accentBright hover:text-accentBright"
              >
                <Linkedin size={14} />
              </a>
              <a
                href={m.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on GitHub`}
                className="w-[30px] h-[30px] border border-hairline/60 flex items-center justify-center text-muted transition-colors hover:border-accentBright hover:text-accentBright"
              >
                <Github size={14} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
