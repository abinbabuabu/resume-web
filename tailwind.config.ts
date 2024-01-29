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
              'h1': '4.4936rem'
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
                },
                g1: '#4f4ed7',
                g2: '#11d3f3',
                g3: '#fcc9ba',

            },

            keyframes: {
                animatedgradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                typewriter: {
                    to: {
                        left: '100%',
                    },
                },
                blink: {
                    '0%': {
                        opacity: '0',
                    },
                    '0.1%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '1',
                    },
                    '50.1%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '0',
                    },
                }
            },
            backgroundSize: {
                '300%': '300%',
            },
            animation: {
                gradient: 'animatedgradient 6s ease infinite alternate',
                typewriter: 'typewriter 0.5s steps(7) forwards',
                caret: 'typewriter 0.5s steps(7) forwards, blink 1s steps(7) infinite 2s',
            },
        },
    },
    plugins: [require("daisyui")],
}
export default config
