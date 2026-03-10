import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://10bestpick.online'),
  title: '10BestPick - Expert Product Reviews & Recommendations',
  description: 'Discover the best products across all categories with our expert-curated top 10 lists. Make informed purchasing decisions with comprehensive reviews and comparisons.',
  keywords: 'product reviews, best products, top 10, product comparisons, buying guide, expert recommendations',
  authors: [{ name: '10BestPick' }],
  robots: 'index, follow',
  openGraph: {
    title: '10BestPick - Expert Product Reviews & Recommendations',
    description: 'Discover the best products across all categories with our expert-curated top 10 lists.',
    url: 'https://10bestpick.online',
    siteName: '10BestPick',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: '10BestPick - Expert Product Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10BestPick - Expert Product Reviews & Recommendations',
    description: 'Discover the best products across all categories with our expert-curated top 10 lists.',
    images: ['https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  verification: {
    other: {
      lhverifycode: '32dc01246faccb7f5b3cad5016dd5033',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="lhverifycode" content="32dc01246faccb7f5b3cad5016dd5033" />
        <meta name="verify-yeahpromos" content="a2451d5dd217" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
