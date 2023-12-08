import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						p: { color: colors.slate['600'] },
						pre: { fontsize: '12px', borderRadius: 0 },
						h1: { fontWeight: '300 !important' },
					},
				},
				sm: { css: { pre: false } },
				lg: { css: { pre: false } },
				xl: { css: { pre: false } },
				'2xl': { css: { pre: false } },
			},
		},
	},
	plugins: [typographyPlugin],
}

export default config
