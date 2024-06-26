import dayjs from 'dayjs';
import path from 'path';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(path.resolve('./package.json'), 'utf8'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {},
  webpack: (config, { webpack, isServer }) => {
    if (isServer) {
      config.externals.push('svg-captcha');
    }
    const plugin = new webpack.DefinePlugin({
      __APP_INFO__: JSON.stringify({
        pkg,
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      }),
    });
    config.plugins.push(plugin);
    return config;
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracing: false, // https://github.com/vercel/next.js/issues/40760
};

export default nextConfig;
