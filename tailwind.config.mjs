export default {
    darkMode: ['selector', "[class~='dark']"],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                card: {
                    DEFAULT: 'var(--card)',
                    border: 'var(--card-border)',
                    shadow: 'var(--card-shadow)',
                    light: 'rgb(255, 255, 255)'
                },
                primary: {
                    DEFAULT: 'var(--primary)'
                },
                secondary: {
                    DEFAULT: 'var(--secondary)'
                },
                muted: {
                    DEFAULT: 'var(--muted)'
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    hover: 'var(--accent-hover)'
                },
                border: 'var(--border)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            animation: {
                cursor: 'cursor 1s ease-in-out infinite',
                bounce: 'bounce 1s infinite'
            },
            keyframes: {
                cursor: {
                    '0%': {opacity: 0},
                    '50%': {opacity: 1},
                    '100%': {opacity: 0}
                },
                bounce: {
                    '0%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(.8, 0, 1, 1)'
                    },
                    '50%': {
                        transform: 'none',
                        animationTimingFunction: 'cubic-bezier(0, 0, .2, 1)'
                    }
                }
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
};
