import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bellgams Carpet Cleaning | Professional Carpet Cleaning Services',
  description: 'Professional carpet cleaning services in British Columbia. Expert steam cleaning, pet stain removal, and upholstery cleaning. Same-day service available.',
  keywords: 'carpet cleaning, steam cleaning, upholstery cleaning, pet stain removal, professional cleaning services',
  openGraph: {
    title: 'Bellgams Carpet Cleaning | Professional Carpet Cleaning Services',
    description: 'Professional carpet cleaning services in British Columbia. Expert steam cleaning, pet stain removal, and upholstery cleaning.',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Bellgams Carpet Cleaning',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
