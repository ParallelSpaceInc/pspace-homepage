import type { Metadata } from 'next';
import { metadataConfig } from '@/config/metadata';
import IntroductionClientLayout from './client-layout';

export const metadata: Metadata = metadataConfig.introduction;

export default function IntroductionLayout({ children }: { children: React.ReactNode }) {
  return <IntroductionClientLayout>{children}</IntroductionClientLayout>;
}
