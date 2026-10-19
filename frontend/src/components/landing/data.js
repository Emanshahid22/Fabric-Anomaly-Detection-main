import {
  Eye,
  Zap,
  ClipboardCheck,
  Circle,
  Droplet,
  CircleDashed,
  Scissors,
  AlignJustify,
  Columns3,
  MoveVertical,
  Waves,
  ChevronsRight,
  BarChart3,
} from "lucide-react";

export const FEATURE_STRIP = [
  {
    label: "Pixel-Level Precision",
    desc: "Detects subtle anomalies invisible to the human eye.",
  },
  {
    label: "Zero-Shot AI",
    desc: "Works on any fabric, no retraining or custom models.",
  },
  {
    label: "10 Universal Categories",
    desc: "Automatically classifies defects across standard textile types.",
  },
  {
    label: "Real-Time Insights",
    desc: "Live scan, instant results, actionable reports.",
  },
];

export const WHY_CARDS = [
  {
    num: "01",
    icon: Eye,
    title: "Manual Risk",
    desc: "Even trained inspectors miss sub-millimeter defects at line speed — fatigue compounds the miss rate, shift over shift.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Efficiency",
    desc: "Faults caught at the loom, not the customer. Every stoppage is a defect that never left the floor.",
  },
  {
    num: "03",
    icon: ClipboardCheck,
    title: "Traceability",
    desc: "Every yard is scored, logged and timestamped — a verifiable record, not a supervisor's memory.",
  },
];

export const DEFECT_CATEGORIES = [
  { num: "01", label: "Hole", icon: Circle },
  { num: "02", label: "Stain", icon: Droplet },
  { num: "03", label: "Missing End", icon: CircleDashed },
  { num: "04", label: "Broken Pick", icon: Scissors },
  { num: "05", label: "Slubs", icon: AlignJustify },
  { num: "06", label: "Reed Marks", icon: Columns3 },
  { num: "07", label: "Thick & Thin Places", icon: MoveVertical },
  { num: "08", label: "Float", icon: Waves },
  { num: "09", label: "Bowing & Skewing", icon: ChevronsRight },
  { num: "10", label: "Filling Bar", icon: BarChart3 },
];

export const TEAM = [
  {
    name: "Eman Shahid",
    id: "221980836",
    linkedin: "https://www.linkedin.com/in/eman-shahid-data-scientist-5639b9287?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/Emanshahid22",
  },
  {
    name: "Jawad Ahmad",
    id: "221980865",
    linkedin: "https://www.linkedin.com/in/jawadahmad05",
    github: "https://github.com/jawadahmad-05",
  },
  {
    name: "Momina Mashyam",
    id: "221980840",
    linkedin: "https://www.linkedin.com/in/momina-mashyam-datascience",
    github: "https://github.com/mominamashyam",
  },
  {
    name: "Tooba Sarwar",
    id: "221980868",
    linkedin: "https://linkedin.com/in/tooba-war-742ba2368",
    github: "https://github.com/toobasarwar",
  },
];

// Position + size of the pulsing anomaly markers inside the hero "Live Scan" panel.
export const ANOMALY_DOTS = [
  { top: "18%", left: "20%", size: 22 },
  { top: "14%", left: "68%", size: 18 },
  { top: "42%", left: "48%", size: 34, main: true },
  { top: "52%", left: "78%", size: 20 },
  { top: "70%", left: "18%", size: 20 },
  { top: "82%", left: "58%", size: 24 },
];
