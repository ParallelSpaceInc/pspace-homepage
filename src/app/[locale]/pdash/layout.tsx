import type { Metadata } from 'next';
import { metadataConfig } from '@/config/metadata';

export const metadata: Metadata = metadataConfig.pdash;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
