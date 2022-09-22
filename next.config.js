const removeImports = require('next-remove-imports')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	swcMinify: true,
	compress: true
}

module.exports = removeImports({
	...nextConfig,
});

