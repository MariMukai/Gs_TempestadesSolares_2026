/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          900: "#0a0e1a",
          800: "#111726",
          700: "#1a2238",
          600: "#27304a",
        },
        alerta: {
          verde: "#22c55e",
          amarelo: "#eab308",
          laranja: "#f97316",
          vermelho: "#ef4444",
        },
      },
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],
        body: ["'Exo 2'", "sans-serif"],
      },
      keyframes: {
        pulso: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        surgir: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        brilhar: {
          "0%, 100%": { textShadow: "0 0 20px rgba(249,115,22,0.5)" },
          "50%": { textShadow: "0 0 35px rgba(249,115,22,0.9)" },
        },
        piscar: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        pulso: "pulso 2s ease-in-out infinite",
        surgir: "surgir 0.6s ease-out forwards",
        brilhar: "brilhar 3s ease-in-out infinite",
        piscar: "piscar 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};