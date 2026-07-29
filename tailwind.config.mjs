export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: { 50: '#fff4ed', 100: '#ffe0cc', 500: '#ff6a00', 600: '#f0441f', 900: '#7a1b10' },
        ink: '#0b1118',
      },
      boxShadow: { soft: '0 24px 70px rgba(15,23,42,.10)' },
    },
  },
  plugins: [],
};
