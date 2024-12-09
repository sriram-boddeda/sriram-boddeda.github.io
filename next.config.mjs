// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//     // remotePatterns: [
//     //   {
//     //     protocol: "https",
//     //     hostname: "images.unsplash.com",
//     //   },
//     //   {
//     //     protocol: "https",
//     //     hostname: "picsum.photos",
//     //   },
//     // ],
//   },
//   basePath: '/portfolio',
//   assetPrefix: '/portfolio',
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
