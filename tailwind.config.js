/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Elegant font for hero titles and headings
        'hero-title': ['"Cinzel Decorative"', 'serif'],
        // Body font - can be adjusted as needed
        'body': ['Lora', 'serif'],
      },
      colors: {
        // Gold shades for accents
        "royal-gold": "#b8860b",
        "gold-light": "#FACC15",
        // Background colors for light theme
        "light-bg": "#FFFFFF",
        "cream-bg": "#fdf6e3",
        // Text colors for dark text on light backgrounds
        "dark-text": "#111827",
        "gray-text": "#4b5563",
      },
      boxShadow: {
        "gold-glow": "0 0 12px 2px #FFD700",
        "gold-glow-light": "0 0 20px 4px #FACC15",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
