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
        'custom-oxygen' : "url('/oxygenbg.png')"
      },
      fontFamily: {
        kodchasan: ['Kodchasan', 'sans-serif'],
      },
      textShadow: {
        'black-outline': '1px 1px 0 rgba(0, 0, 0, 1)'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow': {
            textShadow: '1px 1px 0 rgba(0, 0, 0, 1)',
          }
        },
        ['responsive', 'hover']
      )
    }
  ],
}

