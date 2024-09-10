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
        'custom-bg1' :"url('/image 3.png')",
        'custom-bg2' :"url('/image 2.png')",
        'custom-bg3':"url('/logimg.png')",
        'custom-blood':"url('/bloodbank.png')",
        'custom-hospital': "url('/hospital.png')",
      },
      fontFamily: {
        kodchasan: ['Kodchasan', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

