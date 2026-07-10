/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        ink: {
          950: "#07080c",
          900: "#0e1118",
          800: "#161b28",
          700: "#222838",
          600: "#3a4258",
          500: "#5a6478",
          400: "#8b95ad",
          300: "#b8c0d4",
          200: "#dce2ef",
          100: "#f0f3fa",
        },
        accent: {
          DEFAULT: "#4da3ff",
          light: "#7dbdff",
          dark: "#2b7fd9",
        },
        mint: {
          DEFAULT: "#34d9a8",
          light: "#6eecc4",
        },
        violet: {
          DEFAULT: "#8b6cf6",
          light: "#b49aff",
        },
        amber: {
          DEFAULT: "#f5b84a",
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 8s ease-in-out infinite",
        "soft-bounce": "softBounce 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" },
        },
        softBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(77, 163, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
