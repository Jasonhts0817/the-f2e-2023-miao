/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontSize: {},
    fontFamily: {
      sans: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        primary: "#DA7D4A",
        "font-primary": "#334155",
        "font-secondary": "#94A3B8",
        "bg-1": "#FDFCFB",
        "bg-2": "#F7ECE1",
      },
      spacing: {
        192: "192px",
      },
      fontSize: {
        h1: [
          "40px",
          { lineHeight: "60px", letterSpacing: "-0.8px", fontWeight: "700" },
        ],
        h2: [
          "32px",
          { lineHeight: "normal", letterSpacing: "normal", fontWeight: "700" },
        ],
        h3: [
          "28px",
          { lineHeight: "normal", letterSpacing: "normal", fontWeight: "700" },
        ],
        h4: [
          "24px",
          { lineHeight: "36px", letterSpacing: "normal", fontWeight: "700" },
        ],
        h5: [
          "20px",
          { lineHeight: "normal", letterSpacing: "normal", fontWeight: "700" },
        ],
        h6: [
          "16px",
          { lineHeight: "normal", letterSpacing: "normal", fontWeight: "700" },
        ],
        base: [
          "18px",
          { lineHeight: "27px", letterSpacing: "normal", fontWeight: "400" },
        ],
        body: [
          "16px",
          { lineHeight: "24px", letterSpacing: "normal", fontWeight: "400" },
        ],
        small: [
          "14px",
          { lineHeight: "21px", letterSpacing: "normal", fontWeight: "400" },
        ],
        "2xl": [
          "64px",
          { lineHeight: "68px", letterSpacing: "2px", fontWeight: "400" },
        ],
        "3xl": [
          "96px",
          { lineHeight: "101px", letterSpacing: "2px", fontWeight: "400" },
        ],

        "h1-xs": [
          "32px",
          { lineHeight: "60px", letterSpacing: "-0.8px", fontWeight: "700" },
        ],
        "h2-xs": [
          "24px",
          { lineHeight: "normal", letterSpacing: "normal", fontWeight: "700" },
        ],
        "h3-xs": [
          "24px",
          { lineHeight: "normal", letterSpacing: "normal", fontWeight: "700" },
        ],
        "h4-xs": [
          "24px",
          { lineHeight: "36px", letterSpacing: "normal", fontWeight: "700" },
        ],
        "h5-xs": [
          "20px",
          { lineHeight: "normal", letterSpacing: "normal", fontWeight: "700" },
        ],
        "h6-xs": [
          "16px",
          { lineHeight: "normal", letterSpacing: "normal", fontWeight: "700" },
        ],
        "base-xs": [
          "16px",
          { lineHeight: "27px", letterSpacing: "normal", fontWeight: "400" },
        ],
        "body-xs": [
          "16px",
          { lineHeight: "24px", letterSpacing: "normal", fontWeight: "400" },
        ],
        "small-xs": [
          "14px",
          { lineHeight: "21px", letterSpacing: "normal", fontWeight: "400" },
        ],
        "2xl-xs": [
          "40px",
          { lineHeight: "42px", letterSpacing: "2px", fontWeight: "400" },
        ],
        "3xl-xs": [
          "96px",
          { lineHeight: "101px", letterSpacing: "2px", fontWeight: "400" },
        ],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
