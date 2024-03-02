import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import type { Metadata } from "next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <h1 className="text-3xl font-extrabold text-secondary-700">
         test our fonts 
         </h1>
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
