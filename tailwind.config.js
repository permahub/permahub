/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '15': '15deg',
      },
      backgroundImage: {
        'noise': "url('https://www.reactbits.dev/assets/noise.png')",
      },
      colors: {
        'spektr-cyan-50': '#E0F7FA',
      },
      keyframes: {
        flip: {
          to: { transform: "rotate(360deg)" },
        },
        rotate: {
          to: { transform: "rotate(90deg)" },
        },
      },
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
    },
  },
  plugins: [],
}
