import CtaOne from "@/components/wrappers/cta/cta-one";
import { CtaThree } from "@/components/wrappers/cta/cta-three";
import CtaTwo from "@/components/wrappers/cta/cta-two";
import { NewsletterOne } from "@/components/wrappers/newsletter/newsletter-one";
import TabProductOne from "@/components/wrappers/tabs-products/tabproduct-one";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import type { Metadata } from "next";

export default function Home() {
  return (
    <main className="min-h-screen">
         <TabProductOne/>
         <CtaOne/>
         <CtaThree/>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'page d\'acceuil',
  description: 'Buy more than you think',
  openGraph: mergeOpenGraph({
    title: 'page d\'acceuil',
    url: '/',
  }),
}
