import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {courgetteFont} from '@/app/fonts';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Men and women are different",
  description: "A full ecommerce store for selling mens and womens stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courgetteFont.className}>{children}</body>
    </html>
  );
}
