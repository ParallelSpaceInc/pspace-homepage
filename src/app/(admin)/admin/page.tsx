'use client';

import dynamic from 'next/dynamic';

// Firebase only initializes in the browser, so the static build never needs its config.
export default dynamic(() => import('./AdminApp'), { ssr: false });
