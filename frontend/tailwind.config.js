/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Login page splits to two columns above 900px (between md and lg).
        split: "900px",
      },
      colors: {
        // ZSAD Inspector landing page palette (industrial / warm-dark)
        ink: "oklch(0.13 0.012 45)",
        inkDeep: "oklch(0.11 0.01 45)",
        panel: "oklch(0.17 0.014 45)",
        panelHover: "oklch(0.20 0.016 45)",
        hairline: "oklch(0.32 0.02 45 / <alpha-value>)",
        text: "oklch(0.97 0.006 90)",
        muted: "oklch(0.68 0.015 60)",
        mutedDark: "oklch(0.5 0.015 60)",
        accent: "oklch(0.68 0.19 40 / <alpha-value>)",
        accentBright: "oklch(0.75 0.20 45 / <alpha-value>)",
        success: "oklch(0.72 0.16 155 / <alpha-value>)",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ['"Work Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 0 0 oklch(0.68 0.19 40 / 0.55), 0 0 14px 2px oklch(0.68 0.19 40 / 0.35)",
          },
          "50%": {
            boxShadow:
              "0 0 0 6px oklch(0.68 0.19 40 / 0), 0 0 22px 6px oklch(0.68 0.19 40 / 0.55)",
          },
        },
        pulseGlowGreen: {
          "0%, 100%": {
            boxShadow:
              "0 0 0 0 oklch(0.72 0.16 155 / 0.55), 0 0 14px 2px oklch(0.72 0.16 155 / 0.35)",
          },
          "50%": {
            boxShadow:
              "0 0 0 6px oklch(0.72 0.16 155 / 0), 0 0 22px 6px oklch(0.72 0.16 155 / 0.55)",
          },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "pulse-glow-green": "pulseGlowGreen 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
