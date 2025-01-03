import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		fontFamily: {
			inter: "Inter, sans-serif",
		},
		extend: {
			backgroundImage: {
				gradient: 'linear-gradient(to right, #665DCD 0%, #5FA4E6 45%, #D2AB67 100%)'
			},
			colors: {
				white: "#F5F5F5",
				black: "#050505",
				"neutral-light": "#E6E6E6",
				"neutral-mid": "#94959E",
				"neutral-dark": "#141619",
				primary: "#665DCD",
				secondary: "#5FA4E6",
				accent: "#D2AB67",
			},
			borderRadius: {
				'c-xs': "0.25rem",  // 4px
				'c-sm': "0.5rem",   // 8px
				'c-md': "0.75rem",  // 12px
				'c-lg': "1rem",     // 16px
				'c-xl': "1.75rem",  // 28px
			  },
			fontFamily: {
				roboto: ['Inter', 'sans-serif'],
			},
			fontSize: {
				'dis-l': ['4.75rem', { lineHeight: '5.5rem', fontWeight: '500' }],
				'dis-m': ['3.8125rem', { lineHeight: '4.5625rem', fontWeight: '500' }],

				'head-l': ['3.5rem', { lineHeight: '4.875rem', fontWeight: '500' }],
				'head-m': ['2.25rem', { lineHeight: '2.75rem', fontWeight: 'regular' }],

				'body-l': ['1.25rem', { lineHeight: '1.875rem', fontWeight: 'regular' }],
				'body-m': ['1.125rem', { lineHeight: '1.875rem', fontWeight: 'regular' }],
				'body-s': ['0.875rem', { lineHeight: '1.125rem', fontWeight: 'light' }], 
				
				'label-l': ['1.25rem', { lineHeight: '1.75rem', fontWeight: 'bold' }],
				'label-m': ['1.125rem', { lineHeight: '1.4375rem', fontWeight: 'bold' }],

				'title-l': ['2.375rem', { lineHeight: '4.25rem', fontWeight: '500' }],
				'title-m': ['1.625rem', { lineHeight: '2.75rem', fontWeight: 'regular' }],
			},
		},
	},
  plugins: [],
} satisfies Config;
