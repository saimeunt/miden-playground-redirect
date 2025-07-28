import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
