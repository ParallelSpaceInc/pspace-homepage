import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import '../../../styles/globals.css';
import { pretendard } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'pspace.ai 관리자',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} font-sans min-h-screen bg-gray-50 text-gray-800`}>
        {children}
        <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}
