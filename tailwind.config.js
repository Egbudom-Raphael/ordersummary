/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '450px',
      lg: '450px',
      xl: '450px',
      "2xl": "450px",
    },
    extend: {
      colors: {
        paleblue: 'hsl(225, 100%, 94%)',
        brightblue: 'hsl(245, 75%, 52%)',
        verypaleblue: 'hsl(225, 100%, 98%)',
        desaturatedblue: 'hsl(224, 23%, 55%)',
        darkblue: 'hsl(223, 47%, 23%)',
        purple: 'hsl(242, 84%, 69%)',
      },
      fontFamily: {
        redhat: ['Red Hat Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}