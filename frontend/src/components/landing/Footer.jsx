import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline/40 px-5 md:px-10 lg:px-16 py-11 flex items-center justify-between flex-wrap gap-5 bg-inkDeep">
      <div>
        <div className="flex items-center gap-2 font-mono text-[13px] tracking-wide uppercase">
          Anomaly Detection In Textile <span className="w-1.5 h-1.5 rounded-full bg-accentBright" />
        </div>
        <div className="font-mono text-xs text-mutedDark mt-2">
          &copy; 2026 ZSAD Inspector — Automated Visual Anomaly Detection
        </div>
      </div>
      <div className="flex gap-3.5">
        {[
          {
            Icon: Github,
            href: "https://github.com/Emanshahid22",
            label: "GitHub",
            external: true,
          },
          {
            Icon: Linkedin,
            href: "https://www.linkedin.com/in/eman-shahid-data-scientist-5639b9287?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            label: "LinkedIn",
            external: true,
          },
          {
            Icon: Mail,
            href: "mailto:emanshahid1976@gmail.com",
            label: "Email",
            external: false,
          },
        ].map(({ Icon, href, label, external }, i) => (
          <a
            key={i}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
            className="w-[34px] h-[34px] border border-hairline/60 flex items-center justify-center text-muted transition-colors hover:border-accentBright hover:text-accentBright"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </footer>
  );
}
