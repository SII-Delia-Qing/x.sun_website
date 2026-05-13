import type { Metadata } from 'next';
import { Afacad_Flux } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const afacadFlux = Afacad_Flux({
  subsets: ['latin'],
  variable: '--font-afacad',
});

export const metadata: Metadata = {
  title: 'Xiaoqing Sun',
  description: 'Personal website of Xiaoqing Sun - PhD Student & Researcher',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${afacadFlux.variable}`}>
      <body suppressHydrationWarning className="font-afacad antialiased bg-white text-zinc-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 px-6 max-w-5xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
