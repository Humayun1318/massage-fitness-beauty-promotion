import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        surface: {
          50: '#f8fbff',
          100: '#f1f5fb',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        night: {
          50: '#0b1221',
          100: '#0f1724',
          200: '#131c2f',
          300: '#172036',
          400: '#1f2a40',
          500: '#25304d',
          600: '#2d3a62',
          700: '#34436f',
          800: '#3f4a7c',
          900: '#4c5788',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)',
        glow: '0 0 48px rgba(34, 211, 238, 0.16)',
        elevated: '0 32px 110px rgba(15, 23, 42, 0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
