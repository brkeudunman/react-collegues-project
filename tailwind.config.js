module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'metal': '#F1F2F5',
        'bg-metal':'#E5E5E5',
        'not-metal':'#EDF2F7'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': {
        100: '#F7CCCC',
        200: '#F09999',
        300: '#E86666',
        400: '#E13333',
        500: '#D90000',
        600: '#AE0000',
        700: '#820000',
        800: '#570000',
        900: '#2B0000',
      },
      'gray':{
        100: '#E3E6EA',
        200: '#C6CCD5',
        300: '#AAB3C0',
        400: '#8D99AB',
        500: '#718096',
        600: '#5A6678',
        700: '#444D5A',
        800: '#2D333C',
        900: '#171A1E',
      },
      'accent':{
        100: '#E0D9F0',
        200: '#C2B3E0',
        300: '#A38CD1',
        400: '#8566C1',
        500: '#6640B2',
        600: '#52338E',
        700: '#3D266B',
        800: '#291A47',
        900: '#140D24',
      },
      'success':{
        100: '#D3EFDA',
        200: '#A7DFB5',
        300: '#7ACF91',
        400: '#4EBF6C',
        500: '#22AF47',
        600: '#1B8C39',
        700: '#14692B',
        800: '#0E461C',
        900: '#07230E',
      },
     

      
      // ...
    },
  },
  plugins: [],
}