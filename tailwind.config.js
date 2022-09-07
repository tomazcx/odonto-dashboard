/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    theme: {

        extend: {
            keyframes: {
                show: {
                    '0%': { width: '80%' },
                    '100%': { width: '100%' },
                }
            },
            animation: {
                'show-aside': 'show .3s forwards',
            },
            fontFamily: {
                sans: "Kumbh Sans, sans-serif"
            },
            colors: {
                blue: {
                    400: '#00C4F5',
                    500: '#0085A5'
                },
                red: {
                    400: '#FF5C5C'
                },
                gray: {
                    100: '#F4F4F4',
                    200: '#E8E8E8',
                    300: '#B9B9B9',
                    400: '#6C6C6C',
                    500: '#575757',
                    600: '#3A3A3A'
                }
            }
        },
    },
    plugins: [],
}