import React from "react";

// Simplified 4-color Google mark used on the "Sign in with Google" button.
export default function GoogleIcon({ size = 18 }) {
  return (
    <span
      className="inline-block rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "conic-gradient(from 90deg, #4285F4 0 25%, #34A853 25% 50%, #FBBC05 50% 75%, #EA4335 75% 100%)",
      }}
      aria-hidden="true"
    />
  );
}
