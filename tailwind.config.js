const tokens = require('./tailwind-tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px', // 데스크탑 기준점
      '2xl': '1536px',
      // 커스텀 브레이크포인트
      desktop: '1280px', // xl과 동일 (사용 편의성)
      tablet: { min: '640px', max: '1023px' }, // 태블릿 전용
    },
    extend: {
      colors: tokens.colors,
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      fontSize: {
        ...tokens.fontSize,
        // Aliases for responsive headings as requested
        'heading-md': [tokens.fontSize.h2, { lineHeight: '1.2' }], // 48px
        'heading-sm': [tokens.fontSize.h4, { lineHeight: '1.2' }], // 32px
        'heading-base': [tokens.fontSize.h5, { lineHeight: '1.2' }], // 24px
        'subheading-md': [tokens.fontSize.h4, { lineHeight: '1.2' }], // 32px
        'subheading-sm': [tokens.fontSize.h5, { lineHeight: '1.2' }], // 24px
        'subheading-base': [tokens.fontSize.h6, { lineHeight: '1.2' }], // 20px
      },
      lineHeight: tokens.lineHeight,
    },
  },
  plugins: [],
};
