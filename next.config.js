/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["127.0.0.1", "res.cloudinary.com"],
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "127.0.0.1",
    //     port: "8000",
    //   },
    // ],
  },
};

module.exports = nextConfig;
