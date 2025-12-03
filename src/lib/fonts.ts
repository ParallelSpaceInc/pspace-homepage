import localFont from 'next/font/local';

// default font family로 pretendard가 쓰입니다.
export const pretendard = localFont({
  src: [
    {
      path: '../../public/assets/fonts/pretendard/Pretendard-Light.subset.woff2',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/pretendard/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/pretendard/Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/pretendard/Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: '../../public/assets/fonts/pretendard/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
    {
      path: '../../public/assets/fonts/pretendard/Pretendard-ExtraBold.subset.woff2',
      weight: '800',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});
