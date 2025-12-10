import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // <--- 이 설정으로 /en/ 접근 시 en/index.html로 서빙
};

export default withNextIntl(nextConfig);
