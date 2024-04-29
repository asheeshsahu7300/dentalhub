module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            fontFamily: {
                Poppins: "'poppins', sans-serif",
                Roboto: "'roboto' sans-serif",
            },
            colors: {
                'primary': '#a4161a',
                'secondary': '#3a0ca3',
                'white':'#fff'
            }
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover'],
        },
    },
    plugins: [],
}