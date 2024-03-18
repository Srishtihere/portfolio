/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "",
  content: [
    // "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: ["flowbite/plugin"],
};
