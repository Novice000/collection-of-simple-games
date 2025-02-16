import type { Config } from "tailwindcss";


export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#1A1A1D',
  			foreground: 'white',
  			card: {
  				DEFAULT: '#6A1E55',
  				foreground: 'white'
  			},
  			popover: {
  				DEFAULT: '#6A1E55',
  				foreground: 'white'
  			},
  			primary: {
  				DEFAULT: '#6A1E55',
  				foreground: 'white'
  			},
  			secondary: {
  				DEFAULT: '#6A1E55',
  				foreground: 'white'
  			},
  			muted: {
  				DEFAULT: '#6A1E55',
  				foreground: 'white'
  			},
  			accent: {
  				DEFAULT: '#6A1E55',
  				foreground: 'white'
  			},
  			destructive: {
  				DEFAULT: '#6A1E55',
  				foreground: 'white'
  			},
  			border: '#6A1E55',
  			input: '#6A1E55',
  			ring: '#6A1E55',
  			chart: {
  				'1': '#6A1E55',
  				'2': '#6A1E55',
  				'3': '#6A1E55',
  				'4': '#6A1E55',
  				'5': '#6A1E55'
  			}
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: 'calc(0.5rem - 2px)',
  			sm: 'calc(0.5rem - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

