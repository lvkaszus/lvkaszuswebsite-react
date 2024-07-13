/*

    lvkaszusWebsite-React --- version: 4.2
    
        TailwindCSS Configuration File

       To make most of the styles work.

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', 'monospace'],
      },
      fontWeight: {
        light: 300,
        normal: 500,
        bold: 600,
      },

      colors: {
        backgroundColor: '#000000',
        mainColor: '#FFFFFF',
        subtitleColor: '#00FFFF',
        linkColor: '#FFFFFF',
        linkHoverColor: '#C0C0C0',
        linkActiveColor: '#888888',
        linkFooterColor: '#7F7F7F',
      },

      boxShadow: {
        pink: '0 3px 15px #FF2DC0',
        gray: '0 3px 15px #D1D5DB',
        orange: '0 3px 15px #FF8800',
        blue: '0 3px 15px #00D0FF',
        lightorange: '0 3px 15px #FFDBB0',
      },
    },
  },
  plugins: [],
}