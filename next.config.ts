import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/_next/static/media/miden_client_web.8318b253.wasm",
      // 0.13.3
      destination:
        "https://miden-playground-assets.walnut.dev/_next/static/media/miden_client_web.24b3664b.wasm",
      permanent: true,
    },
    {
      source: "/_next/static/media/miden_client_web.e6753bbd.wasm",
      // 0.13.2
      destination:
        "https://miden-playground-assets.walnut.dev/_next/static/media/miden_client_web.e00a052b.wasm",
      permanent: true,
    },
  ],
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/:path*",
        destination: `https://miden-playground.walnuthq.workers.dev/:path*`,
      },
    ],
  }),
};

export default nextConfig;
