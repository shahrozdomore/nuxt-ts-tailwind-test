module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'banner-bg': '#E6FFFA',
        'green-text': '#319795',
        'dark-text': '#2D3748',
        'darker-text': '#4A5568',
        'light-text': '#E6FFFA',
        'tab-btn': '#81E6D9',
        'app-border': '#CBD5E0',
        'large-text': '#718096',
        'circle-color': '#F7FAFC' 
      },
      boxShadow: {
        'header-shadow': ' 0px 3px 6px #00000029',
        'registration-shadow': '0px -1px 3px #00000033'
      },
      fontSize: {
        '21': '21px',
        '130': '130px'
      },
      width: {
        '304px': '304px'
      },
      height: {
        '304px': '304px'
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
