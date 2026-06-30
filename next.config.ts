import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i-dle.cubeent.co.jp',
            },
        ],
    },
};

export default nextConfig;
