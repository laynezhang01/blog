import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.linzip.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                pathname: '**'
            }
        ],
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;
