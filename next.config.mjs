const nextConfig = {
  productionBrowserSourceMaps: false,
  devIndicators: false,
  reactCompiler: true,
  compress: true,

  experimental: {
    optimizePackageImports: ["@reduxjs/toolkit", "react-redux"],
  },
};

export default nextConfig;
