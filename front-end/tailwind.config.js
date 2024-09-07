const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/Rectangle 2.png')",  //  image path
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

