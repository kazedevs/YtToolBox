import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yttoolbox.com'),
  title: "YtToolBox - YouTube Tools Collection",
  description: "YouTube Tools Collection",
  icons: {
    icon: '/fav.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={roboto.className}>
        {children}
        <Script
          async
          src="https://cdn.seline.com/seline.js"
          data-token="d5476c3985a32dd"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
