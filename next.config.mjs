/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  transpilePackages: ["three"],
};

export default nextConfig;
