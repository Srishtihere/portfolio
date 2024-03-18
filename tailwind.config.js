/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "dark",
  content: [
    // "./index.html",
    "./src/**/*.tsx",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: ["flowbite/plugin"],
};
