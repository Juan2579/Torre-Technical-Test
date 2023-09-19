/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        almarai: ["var(--font-almarai)"],
      },
      colors: {
        "primary-purple": "#251f87",
        "primary-blue": "#32cae4",
      },
      backgroundImage: {
        "hero-bg": "url('https://fullkit.moxcreative.com/biru/wp-content/uploads/sites/20/2022/10/bg_pattern.png')"
      }
    },
  },
  plugins: [],
}
