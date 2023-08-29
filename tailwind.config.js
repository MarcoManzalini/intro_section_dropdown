/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/components/FrontCard.vue"
    ],
    theme: {
        extend: {
            colors: {
                almostWhite: 'hsl(var(--color-almostWhite) / <alpha-value>)',
                mediumGray: 'hsl(var(--color-mediumGray) / <alpha-value>)',
                almostBlack: 'hsl(var(--color-almostBlack) / <alpha-value>)',
            },
            gridTemplateColumns: {
                'main': '1.5fr 1fr'
            },
            screens: {
                'big-desktop': {'min': '1600px'},
                'mobile': {'max': '600px'}
            }
        },
    },
    plugins: [],
}

