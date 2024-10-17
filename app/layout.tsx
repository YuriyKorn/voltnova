import type { Metadata } from 'next';
import { Noto_Sans_Display } from 'next/font/google';
// import { Manrope } from 'next/font/google';
// import { Shantell_Sans } from 'next/font/google';
// import { Roboto_Condensed } from 'next/font/google';
// import localFont from 'next/font/local';

import Header from '@/components/Header/Header';
import Feedback from '@/components/Feedback/Feedback';
import Footer from '@/components/Footer/Footer';

import './globals.scss';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900'
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900'
// });

// const font = Shantell_Sans({ subsets: ['cyrillic'] });
// const font = Roboto_Condensed({ subsets: ['cyrillic'] });
const font = Noto_Sans_Display({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Battery',
  description: 'Best LiFePO4 batteries'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body> */}
      <body className={font.className}>
        <Header />
        {children}
        <Feedback />
        <Footer />
      </body>
    </html>
  );
}
