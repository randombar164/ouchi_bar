module.exports = {
  rewrites: async () => {
    return [{ source: "/", destination: "/blog" }];
  },
  pageExtensions: ["page.tsx", "page.ts"],
  webpack: function (config, { dev }) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 200,
      };
    }
    return config;
  },
  reactStrictMode: true,
  experimental: { esmExternals: true },
  images: {
    domains: ["ws-fe.amazon-adsystem.com", "m.media-amazon.com"],
  },
};
