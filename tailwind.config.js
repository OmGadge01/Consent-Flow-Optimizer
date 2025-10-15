/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        background: '#F9FAFB',
        surface: '#FFFFFF',
        primary: '#0F766E',
        accent: '#F59E0B',
        border: '#E5E7EB',
        text: {
          base: '#111827',
          soft: '#6B7280',
        },
        risk: {
          low: '#10B981',
          med: '#F59E0B',
          high: '#EF4444',
        },
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.06)',
        hover: '0 4px 12px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
