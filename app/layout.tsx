import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const geist = localFont({
  src: [
    {
      path: "./fonts/Geist/GeistVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Foreign Admits - Study Abroad Consultancy | International Education",
    template: "%s | Foreign Admits"
  },
  description: "Your trusted partner for studying abroad. Expert guidance for university admissions, visa processing, test preparation, and career counseling for international education opportunities.",
  keywords: [
    "study abroad",
    "international education",
    "university admissions",
    "visa processing",
    "IELTS preparation",
    "GRE preparation",
    "SAT preparation",
    "study overseas",
    "education consultancy",
    "foreign admits",
    "study in USA",
    "study in UK",
    "study in Canada",
    "study in Australia",
  ],
  authors: [{ name: "Foreign Admits" }],
  creator: "Foreign Admits",
  publisher: "Foreign Admits",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.foreignadmits.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.foreignadmits.com',
    title: 'Foreign Admits - Study Abroad Consultancy',
    description: 'Your trusted partner for studying abroad. Expert guidance for international education opportunities.',
    siteName: 'Foreign Admits',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Foreign Admits - Study Abroad Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foreign Admits - Study Abroad Consultancy',
    description: 'Your trusted partner for studying abroad. Expert guidance for international education opportunities.',
    images: ['/og-image.jpg'],
    creator: '@foreignadmits',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className={`${geist.variable} ${inter.variable} font-geist`}>
        {children}
      </body>
    </html>
  );
}
