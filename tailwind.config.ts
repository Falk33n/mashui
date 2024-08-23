import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        bg: 'hsl(var(--bg))',
        text: 'hsl(var(--text))',
        primary: {
          DEFAULT: 'hsl(var(--primary-bg))',
          text: 'hsl(var(--primary-text))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-bg))',
          text: 'hsl(var(--secondary-text))'
        },
        error: {
          DEFAULT: 'hsl(var(--error-bg))',
          text: 'hsl(var(--error-text))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning-bg))',
          text: 'hsl(var(--warning-text))'
        },
        success: {
          DEFAULT: 'hsl(var(--success-bg))',
          text: 'hsl(var(--success-text))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-bg))',
          text: 'hsl(var(--muted-text))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-bg))',
          text: 'hsl(var(--accent-text))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover-bg))',
          text: 'hsl(var(--popover-text))'
        },
        card: {
          DEFAULT: 'hsl(var(--card-bg))',
          text: 'hsl(var(--card-text))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'toast-up': {
          '0%': { transform: 'translateY(300px) scaleX(0)', opacity: '0' },
          '50%': {
            transform: 'translateY(150px) scaleX(0.25)',
            opacity: '0.25'
          },
          '100%': { transform: 'translateY(0) scaleX(1)', opacity: '1' }
        },
        'toast-down': {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '1' },
          '50%': {
            transform: 'translateY(150px) scaleX(0.25)',
            opacity: '0.25'
          },
          '100%': { transform: 'translateY(300px) scale(0)', opacity: '0' }
        }
      },
      animation: {
        'toast-up': 'toast-up 0.3s ease-in',
        'toast-down': 'toast-down 0.5s ease-in'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
