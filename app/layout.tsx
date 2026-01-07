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
  title: "Foreign Admits",
  description: "Study abroad consultation services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${inter.variable} font-geist`}>
        {children}
      </body>
    </html>
  );
}
