/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-bg": "#e9eaf0",
        "app-text": "#6B7280",
        "app-black": "#24272c",
      },
    },
  },
  plugins: [],
};
