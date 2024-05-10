module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            margin: {
                center: 'calc(50% - 82px)',
            },
            colors: {
                brand: {
                    100: "#011937",
                    200: "#00ff65",
                    300: "#2980f9",
                    400: "#ff065d",
                    500: "#8500e7",
                    600: "#eeeeee"
                }
            }
        },
    },
    plugins: [],
}
