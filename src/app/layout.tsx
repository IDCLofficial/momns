export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'

// optimized metadata for seo
export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
