module.exports = {
  rewrites: async () => {
    return [{ source: "/", destination: "/blog" }];
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  reactStrictMode: true,
  experimental: { esmExternals: true },
  images: {
    domains: ["ws-fe.amazon-adsystem.com"],
  },
};
