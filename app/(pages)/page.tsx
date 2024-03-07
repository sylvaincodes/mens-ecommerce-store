import { LayoutOne } from "@/components/layouts/layout-one";
import CtaOne from "@/components/wrappers/cta/cta-one";
import { CtaThree } from "@/components/wrappers/cta/cta-three";
import TabProductOne from "@/components/wrappers/tabs-products/tabproduct-one";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import type { Metadata } from "next";

export default function Home() {
  return (
    <LayoutOne>
      <main className="min-h-screen">
          <TabProductOne/>
          <CtaThree/>
          <CtaOne/>
      </main>
    </LayoutOne>
  );
}

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Buy more than you think',
  openGraph: mergeOpenGraph({
    title: 'Homepage',
    url: '/',
  }),
}
