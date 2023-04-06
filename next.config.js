/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		domains: ["cdn.lorem.space"],
		unoptimized: true,
	},
	env: {
		PUBLIC_URL: "/",
	},
};

module.exports = nextConfig;
