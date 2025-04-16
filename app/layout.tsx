import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchCategories } from '@/utils/api';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ACME Store - Premium Products for Everyone',
  description: 'Discover high-quality products at unbeatable prices',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar categories={categories} />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}