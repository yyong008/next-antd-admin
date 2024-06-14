import dayjs from 'dayjs';
import path from 'path';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(path.resolve('./package.json'), 'utf8'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    __APP_INFO__: {
      pkg,
      lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    },
  },
};

export default nextConfig;
