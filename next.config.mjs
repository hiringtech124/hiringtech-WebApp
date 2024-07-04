/** @type {import('next').NextConfig} */
// const nextConfig = {

// };

// export default nextConfig;
// module.exports = {
//   reactStrictMode: true,
// };
// next.config.mjs

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Add a rule to handle .mp4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos",
            outputPath: `${isServer ? "../" : ""}static/videos`,
            name: "[name].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
