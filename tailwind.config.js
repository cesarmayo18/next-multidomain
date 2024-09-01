module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        subdomain1: {
          primary: '#FF5733', // Rojo
          secondary: '#FFC300', // Amarillo
        },
        subdomain2: {
          primary: '#33FF57', // Verde
          secondary: '#339FFF', // Azul
        },
        default: {
          primary: '#555555', // Gris
          secondary: '#888888', // Gris claro
        },
      },
    },
  },
  plugins: [],
}
