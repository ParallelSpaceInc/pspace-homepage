import HomeClient from '../[locale]/(home)/HomeClient';
import RootRedirector from '@/app/(root)/RootRedirector';

// This is a Server Component
export const dynamic = 'force-static';

export default function RootPage() {
  return (
    <>
      <RootRedirector />
      <HomeClient />
    </>
  );
}
