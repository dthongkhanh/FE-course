/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      lg: '1200px',
      md: '904px',
      sm: '335px'
    },
    extend: {
      colors: {
        primary: '#3DCBB1',
        dark: {
          90: 'rgba(27, 27, 27, 0.9)',
          60: 'rgba(27, 27, 27, 0.6)',
          10: 'rgba(27, 27, 27, 0.1)'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-primary': {
          backgroundColor: '#3DCBB1',
          color: '#fff',
          fontWeight: 'bold'
        },
        '.btn-medium': {
          borderRadius: '3px',
          padding: '10px 18px 10px 18px',
          fontSize: '16px'
        },
        '.btn-small': {
          borderRadius: '12px',
          padding: '8px 16px',
          fontSize: '12px',
          height: '32px',
          display: 'inline-flex',
          alignItems: 'center'
        },
        '.btn-large': {
          borderRadius: '18px',
          padding: '12px 24px',
          fontSize: '20px',
          alignItems: 'center'
        },
        '.btn-outline': {
          border: '2px solid',
          fontWeight: 'bold'
        }
      })
    })
  ]
}
