/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  transpilePackages: ["three"],
  images: {
    minimumCacheTTL: 2592000, // cache for 1 month (2592000 seconds)
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate", // cache for 1 month (2592000 seconds)
          },
        ],
      },
    ];
  },
};

export default nextConfig;
