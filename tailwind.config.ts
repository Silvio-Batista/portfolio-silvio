import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        muted: "var(--muted)",
        card: "var(--card-bg)",
        "border-subtle": "var(--card-border)",
        "terminal-green": "var(--terminal-green)",
        "terminal-cyan": "var(--terminal-cyan)",
        "terminal-purple": "var(--terminal-purple)",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        exo: ["var(--font-exo2)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(34, 197, 94, 0.15)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.15)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.15)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
