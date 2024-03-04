import type { Metadata } from "next";
import "@/app/globals.css";
import {onlineFont} from '@/app/fonts';
import {mergeOpenGraph} from '@/lib/mergeOpenGraph'
import { LayoutTwo } from "@/components/layouts/layout-two";

// setup default seo
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'),

  applicationName:'mens and womens are different',
  keywords:["nextjs", 'ecommerce','shop'],
  authors: [{ name: 'sylvaincodes', url: 'https://sylvaincodes.vercel.app' }],
  publisher:'vercel',

  alternates:{
    canonical:'/',
    languages:{
      'fr': '/fr'
    }
  },


  robots:{
    index: false,
    follow:true,
    nocache: true,
    googleBot:{
      index:true,
      noimageindex:false,
    }
  },

  manifest: ` ${process.env.NEXT_PUBLIC_SERVER_URL}/manifest.json`,

  icons:{
    icon: '/favicon.ico',
    shortcut:'/favicon.png',
    apple:'favicon.png'
  },

  twitter:{
    card: 'summary_large_image',
    title: 'Ecommerce website',
    description: 'Men and women are different',
    siteId: '',
    creator: 'sylvaincodes',
    images:[`${process.env.NEXT_PUBLIC_SERVER_URL}/og.png`]
  },

  openGraph:mergeOpenGraph()
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={onlineFont.className}>
        
        <LayoutTwo>
          {children}
        </LayoutTwo>
      
      </body>

    </html>
  );
}
