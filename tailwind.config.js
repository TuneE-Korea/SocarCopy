/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        SecondSectionC: "#141A24",
        AsideFooterC: "#262F3C",
        InstallationC: "#0178FF",
      },
      backgroundImage: {
        slideImg1: "url('/image/photo7.jpg')",
        slideImg2: "url('/image/photo8.jpg')",
        slideImg3: "url('/image/photo9.jpg')",
        slideImg4: "url('/image/photo10.jpg')",
      },
    },
  },
  plugins: [],
};
