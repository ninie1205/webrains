/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                'orange--text': '#D4BDA1',
                'orange': '#EA8040',
                'purple': '#634EC3',
                'text': '#383838',
                'text--light': '#868686'
            }
        },
    },
    plugins: [],
}

