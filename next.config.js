/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/harry-potter-app",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.juanortizdev.com",
        port: "",
        pathname: "/harry-potter-api/**",
      },
    ],
  },
};

module.exports = nextConfig;
