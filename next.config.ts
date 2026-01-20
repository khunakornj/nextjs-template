import type { NextConfig } from 'next';
import * as path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    implementation: 'sass-embedded',
    loadPaths: [path.join(__dirname, 'src/styles/foundation')],
    additionalData: `@use 'inject' as *;`,
  },
};

export default nextConfig;
