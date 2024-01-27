import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontSize: {
                base: ['1.2rem', {
                    lineHeight: '1.92rem',
                    letterSpacing: '0.01em',
                    fontWeight: '300',
                }],
              'h1': '5.4936rem'
            },
            colors: {
                primary: {
                    DEFAULT: '#001219',
                    50: '#FFFFFF',
                },
                textOnPrimary: {
                    DEFAULT: '#e7ecef',
                },
                normalText: {
                    DEFAULT: '#adb5bd',
                },
                accent: {
                    DEFAULT: '#b2ff9e',
                }
            },
        },
    },
    plugins: [require("daisyui")],
}
export default config
