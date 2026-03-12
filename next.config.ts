import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/_next/static/media/miden_client_web.e6753bbd.wasm",
        destination:
          "https://miden-playground-assets.walnut.dev/_next/static/media/miden_client_web.e00a052b.wasm",
      },
      {
        source: "/:path*",
        destination: `https://miden-playground.walnuthq.workers.dev/:path*`,
      },
    ],
  }),
};

export default nextConfig;
