/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'localhost'
        }, {
            hostname: 'cdn.sanity.io'
        }, {
            hostname: "skillicons.dev"
        }],
    }
}

module.exports = nextConfig
