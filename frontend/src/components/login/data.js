import { Crosshair, Zap, ShieldCheck } from "lucide-react";

export const FEATURES = [
  {
    icon: Crosshair,
    title: "Pixel-Level Detection",
    desc: "Detect even the smallest anomalies in real time.",
  },
  {
    icon: Zap,
    title: "Zero-Shot AI Model",
    desc: "No retraining. Detect new defects never seen before.",
  },
  {
    icon: ShieldCheck,
    title: "10 Universal Categories",
    desc: "Comprehensive classification for every type of fabric defect.",
  },
];

// Deterministic (seeded) dot positions for the wave-particle decoration so
// the layout doesn't jitter between renders.
export const WAVE_DOTS = Array.from({ length: 30 }, (_, i) => ({
  cx: (i * 137.5) % 800,
  cy: 150 - ((i * 53) % 60),
  r: 1 + (i % 3) * 0.4,
}));
