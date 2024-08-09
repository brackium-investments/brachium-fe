/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3009",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "maps.geoapify.com",
        // port: '3009',
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
