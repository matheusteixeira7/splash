/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "images.unsplash.com",
            "images.pexels.com",
            "cdn.tailgrids.com",
            "cdn.splashpiscinas.com",
        ],
    },
};

module.exports = nextConfig;
