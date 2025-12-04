import type { Metadata } from 'next';

export interface MetadataConfig {
  pSpace: Metadata;
  pEngine: Metadata;
  introduction: Metadata;
  pdash: Metadata;
  careers: Metadata;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pspace.ai';

export const metadataConfig: MetadataConfig = {
  pSpace: {
    title: 'P-Space: Leading Next-Generation 3D Data Processing Technology',
    description:
      'P-Engine revolutionizes efficiency and productivity across industries such as architecture, manufacturing, and facility management by advancing spatial data.',
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      siteName: 'P-Space',
      title: 'P-Space: Leading Next-Generation 3D Data Processing Technology',
      description:
        'P-Engine revolutionizes efficiency and productivity across industries such as architecture, manufacturing, and facility management by advancing spatial data.',
      images: [
        {
          url: `${baseUrl}/assets/images/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'P-Space',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'P-Space: Leading Next-Generation 3D Data Processing Technology',
      description:
        'P-Engine revolutionizes efficiency and productivity across industries such as architecture, manufacturing, and facility management by advancing spatial data.',
      images: [`${baseUrl}/assets/images/og-image.svg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  pEngine: {
    title: 'P-Engine for Revit | P-Space',
    description:
      'Automate your Revit workflow with P-Engine. Convert point clouds to meshes and optimize your BIM process.',
    openGraph: {
      title: 'P-Engine for Revit | P-Space',
      description:
        'Automate your Revit workflow with P-Engine. Convert point clouds to meshes and optimize your BIM process.',
      url: `${baseUrl}/revit`,
      images: [
        {
          url: `${baseUrl}/assets/images/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'P-Engine for Revit',
        },
      ],
    },
  },
  introduction: {
    title: 'Company Introduction | P-Space',
    description:
      'Learn about P-Space, our mission, vision, and the team revolutionizing 3D spatial data processing.',
    openGraph: {
      title: 'Company Introduction | P-Space',
      description:
        'Learn about P-Space, our mission, vision, and the team revolutionizing 3D spatial data processing.',
      url: `${baseUrl}/introduction`,
      images: [
        {
          url: `${baseUrl}/assets/images/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'P-Space Introduction',
        },
      ],
    },
  },
  pdash: {
    title: 'P-Dash | P-Space',
    description:
      'P-Dash: The ultimate dashboard for managing and visualizing your 3D spatial data.',
    openGraph: {
      title: 'P-Dash | P-Space',
      description:
        'P-Dash: The ultimate dashboard for managing and visualizing your 3D spatial data.',
      url: `${baseUrl}/pdash`,
      images: [
        {
          url: `${baseUrl}/assets/images/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'P-Dash',
        },
      ],
    },
  },
  careers: {
    title: 'Careers | P-Space',
    description:
      'Join the P-Space team and help us build the future of 3D data processing technology.',
    openGraph: {
      title: 'Careers | P-Space',
      description:
        'Join the P-Space team and help us build the future of 3D data processing technology.',
      url: `${baseUrl}/careers`,
      images: [
        {
          url: `${baseUrl}/assets/images/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'P-Space Careers',
        },
      ],
    },
  },
};
