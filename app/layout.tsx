import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/NavBar';
import Footer from './components/Footer';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Acc 343 Exam 2',
  description: 'Prof. Qureshi Starter Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="valentine">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
