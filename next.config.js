const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{ hostname: 'picsum.photos' },
		],
	},
}

module.exports = withContentlayer(nextConfig)
