/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        'light-blue': {
          400: '#7695EC',
          600: '#3d6ceb'
        },
        'del-red': {
          500: '#FF5151',
        }
      },
    }
  },
  plugins: []
};
