module.exports = {
  content: [    "./index.html",    "./src/**/*.{vue,js,ts,jsx,tsx}",  ],
  darkMode: 'class', // enabled
  theme: {
    extend: {
      colors: {
        'dodger-blue': {  DEFAULT: '#32CCFE',  50: '#E9F9FF',  100: '#D4F4FF',  200: '#ACEAFF',  300: '#83E0FE',  400: '#5BD6FE',  500: '#32CCFE',  600: '#01BBF7',  700: '#0190BF',  800: '#016687',  900: '#003C4F',  950: '#002733'},
      }
    },
  },
  plugins: [],
}
