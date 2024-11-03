import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: 'rgb(58,58,60)',
        yellowBackground: 'rgb(178,159,77)',
        correct: 'rgb(97, 139, 85)',
        grayLetter: 'rgb(130,131,132)',
        white: '#EEEEEE'
      },
      fontFamily: {
        body: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
    fontSize: {
      '2xs': '10px',
      xs: '12px',
      sm: '14px',
      // Minor Third Type	Scale kicks in here:
      base: '16px',
      lg: '19.2px',
      xl: '23.04px',
      '2xl': '27.65px',
      '3xl': '33.18px',
      '4xl': '39.81px',
      '5xl': '47.78px',
      '6xl': '57.33px',
    },
  },
  plugins: [],
} satisfies Config;
