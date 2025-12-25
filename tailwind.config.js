/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff2b79",
        primaryDark: "#e32267",
        accentBlue: "#3c8dfb",
        textDark: "#1b1b1f",
        textMuted: "#666777",
        badgeBg: "#ffe8f2",
      },
      boxShadow: {
        heroIcon: "0 14px 40px rgba(7,7,41,0.08)",
        cta: "0 12px 30px rgba(255,43,121,0.36)",
        ctaHover: "0 16px 36px rgba(255,43,121,0.42)",
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};
