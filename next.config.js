/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login.js",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
