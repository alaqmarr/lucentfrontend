import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fetchCategories } from '@/utils/api';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Lucent Industries Products`,
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
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <div className="min-h-screen flex flex-col">
          <Navbar categories={categories} />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
          </ThemeProvider>
      </body>
    </html>
  );
}