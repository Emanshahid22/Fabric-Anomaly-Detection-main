import React from "react";

// Hexagon + centered ring mark used in the nav bar.
export default function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path
        d="M15 2 L27 8.5 V21.5 L15 28 L3 21.5 V8.5 Z"
        stroke="oklch(0.75 0.20 45)"
        strokeWidth="1.6"
      />
      <circle cx="15" cy="15" r="5" stroke="oklch(0.75 0.20 45)" strokeWidth="1.6" />
    </svg>
  );
}
