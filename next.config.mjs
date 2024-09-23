/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "media.themoviedb.org",
                port: "",
            },
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
            },
        ],
    },
};

export default nextConfig;
