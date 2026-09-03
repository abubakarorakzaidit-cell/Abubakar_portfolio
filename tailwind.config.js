/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4fd",
          100: "#dbe7fb",
          200: "#b0cdf6",
          300: "#84b2f0",
          400: "#4d8ee7",
          500: "#1877F2", // Facebook blue
          600: "#1461cc",
          700: "#104ea3",
          800: "#0d3f83",
          900: "#0a3060",
        },
        ink: "#0f1720",
        muted: "#5b6b7c",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,32,0.04), 0 8px 24px rgba(15,23,32,0.06)",
        cardHover: "0 4px 10px rgba(24,119,242,0.08), 0 16px 32px rgba(24,119,242,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
