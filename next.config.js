/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
        domains: ["cdn.sanity.io"],
    },
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store, max-age=0, must-revalidate", // Disable caching
                    },
                ],
            },
        ];
    },
}