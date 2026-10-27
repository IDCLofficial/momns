export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'
import { buildRootMetadata, jsonLd, organizationJsonLd } from "@/lib/seo";

// optimized metadata for seo
const baseMetadata: Metadata = {
  title: {
    default: 'Imo State Ministry of Industry, Mines, and Solid Minerals',
    template: '%s | Imo State Ministry of Industry, Mines, and Solid Minerals',
  },
  description: 'Official website of the Imo State Ministry of Industry, Mines, and Solid Minerals - overseeing and developing the state\'s industrial sector, as well as managing its mineral resources.',
  keywords: ['Imo State Industry', 'Ministry of Industry Imo', 'Mines Imo', 'Solid Minerals Imo'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://mines.im.gov.ng',
    siteName: 'Imo State Ministry of Industry, Mines, and Solid Minerals',
    title: 'Imo State Ministry of Industry, Mines, and Solid Minerals',
    description: 'Official website of the Imo State Ministry of Industry, Mines, and Solid Minerals - overseeing and developing the state\'s industrial sector, as well as managing its mineral resources.',
    images: [
      {
        url: 'https://mines.im.gov.ng/images/IMSG-Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Imo State Ministry of Industry, Mines, and Solid Minerals',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '_7c1t_i-UsjS1_BD_kE-vsXMUak-mgMUnIT91dEUEQ4',
  },
}

export const metadata = buildRootMetadata(baseMetadata);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://pulse-track.onrender.com/tracker.min.js"
          data-key="pk_live_3b21ec1fa76231c2b5d175f5"
          defer
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }} />
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
