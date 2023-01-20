/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// env: {
	//   APP_NAME: 'Alejandro Aguilar Dev',
	//   APP_ENV: 'local',
	//   APP_URL: 'http://localhost:3000',
	//   APP_LOGO: 'https://avatars.githubusercontent.com/u/44012736?v=4',
	// },
};
const withPWA = require("next-pwa")({
	dest: "public",
});

module.exports = withPWA({ ...nextConfig });
