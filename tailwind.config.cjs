/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Lora', 'serif'],
                sans: ['Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'hero-background': "url('/src/assets/background-img.jpg'",
            },
        },
    },
    plugins: [],
};
