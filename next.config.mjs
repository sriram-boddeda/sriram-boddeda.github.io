/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // Match any image URL on a domain that starts with "images."
        // and ends with ".com"
        protocol: "https",
        hostname: "images.unsplash.com",
        // default: true,
      },
    ],
  },
  // webpack5: true,
  // webpack(config) {
  //     config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //     });

  //     return config;
  // },
};

export default nextConfig;
