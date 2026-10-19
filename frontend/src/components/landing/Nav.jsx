import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { scrollToSection } from "../../lib/scrollTo";

const LINKS = [
  { label: "Overview", id: "hero" },
  { label: "Detection", id: "detection" },
  { label: "Team", id: "team" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  function goTo(id) {
    setOpen(false);
    scrollToSection(id);
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 px-5 py-[18px] md:px-10 lg:px-16 bg-[oklch(0.13_0.012_45_/_0.72)] backdrop-blur-md border-b border-hairline/35">
      <div className="flex items-center gap-2.5">
        <Logo size={30} />
        <span className="font-display font-semibold text-[19px] tracking-wide uppercase">
          ZSAD <span className="text-accentBright">Inspector</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-9">
        {LINKS.map((l, i) => (
          <button
            key={l.id}
            onClick={() => goTo(l.id)}
            className={`font-mono text-[12.5px] tracking-[1.5px] uppercase transition-colors ${
              i === 0 ? "text-text border-b border-accentBright" : "text-mutedDark hover:text-text"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <Link
        to="/login"
        className="hidden sm:inline-flex items-center gap-2 bg-accent text-ink px-5 py-[11px] font-mono font-semibold text-[12.5px] tracking-[1.2px] uppercase clip-corner-sm transition-colors hover:bg-accentBright"
      >
        Start Inspection
      </Link>

      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden text-text p-1.5"
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-ink border-b border-hairline/40 flex flex-col px-5 py-4 gap-4">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className="text-left font-mono text-[12.5px] tracking-[1.5px] uppercase text-muted hover:text-text"
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-accent text-ink px-5 py-[11px] font-mono font-semibold text-[12.5px] tracking-[1.2px] uppercase clip-corner-sm"
          >
            Start Inspection
          </Link>
        </div>
      )}
    </nav>
  );
}
