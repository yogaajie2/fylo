module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.5rem', '0.75rem']
      }
    },

    colors: {
      'black': 'black',
      'bright-blue': 'hsl(224, 93%, 58%)',
      'desaturated-blue': 'hsl(238, 22%, 44%)',
      'desaturated-bright-blue': 'hsl(224deg, 93%, 65%)',
      'desaturated-moderate-cyan': 'hsl(170deg, 40%, 61%)',
      'facebook-blue': '#4267B2',
      'light-gray': 'hsl(0, 0%, 75%)',
      'light-grayish-blue': '#f8f8fe',
      'light-red': 'hsl(0, 100%, 63%)',
      'moderate-cyan': 'hsl(170, 45%, 43%)',
      'twitter-blue': '#1DA1F2',
      'very-dark-blue': 'hsl(243, 87%, 12%)',
      'white': 'white'
    },

    fontFamily: {
      'heading': ['Raleway', 'Arial', 'sans-serif'],
      'body': ['"Open Sans"', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
