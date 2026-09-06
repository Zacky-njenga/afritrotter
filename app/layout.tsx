import type { Metadata } from 'next';
import Header from '../components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Afritrotter | Discover Wildlife Across Africa',
  description: 'Explore species, habitats, and interactive maps of African wildlife.',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
      <Header />
      <main>{children}</main>
      </body>
      </html>
  );
}