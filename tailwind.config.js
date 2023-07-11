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
      fontSize: {
        xxs: '10px',
      },
      width: {
        '300px': '300px',
        '45': '45%',
        '800px': '800px',
        '550px': '550px',
        '600px': '600px',
      },
      height: {
        '1px': '1px',
        '280px': '280px',
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
      margin: {
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
      },
      padding: {
        '3px': '3px',
        '5px': '5px',
        'full': '100%',
      },
      boxShadow: {
        pink: '0 3px 15px #FF2DC0',
        yellow: '0 3px 15px #F2FF00',
        white: '0 3px 15px #FFFFFF',
        orange: '0 3px 15px #FF8800',
        blue: '0 3px 15px #00D0FF',
        lightorange: '0 3px 15px #FFDBB0',
      },
    },
  },
  plugins: [],
}