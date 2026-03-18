/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brandDarkBlue: '#0f4c81', // The deep blue
        brandLightBlue: '#3b82f6', // The neon blue
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
      }
    },
  },
}