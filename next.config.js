/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "guitar0.kotdatacenter.net",
        port: "",
        pathname: "/media/lesson_schemes/**",
      },
    ],
  },
};

module.exports = nextConfig;
