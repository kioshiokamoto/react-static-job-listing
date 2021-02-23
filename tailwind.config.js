module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pc': "url('/src/images/bg-header-desktop.svg')",
        'mobile': "url('/src/images/bg-header-mobile.svg')",
        '1': "url('/src/images/photosnap.svg')",
        '2': "url('/src/images/manage.svg')",
        '3': "url('/src/images/account.svg')",
        '4': "url('/src/images/myhome.svg')",
        '5': "url('/src/images/loop-studios.svg')",
        '6': "url('/src/images/faceit.svg')",
        '7': "url('/src/images/shortly.svg')",
        '8': "url('/src/images/insure.svg')",
        '9': "url('/src/images/eyecam-co.svg')",
        '10': "url('/src/images/the-air-filter-company.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
