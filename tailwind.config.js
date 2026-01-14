/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'midnight-navy': '#0a192f',
                'navy-light': '#112240',
                'biolum-cyan': '#64ffda',
                'slate-grey': '#8892b0',
                'slate-light': '#a8b2d1',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            }
        },
    },
    plugins: [],
}
