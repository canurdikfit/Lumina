import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar";

const myFont = localFont({
  src: [
    {
      path: '../assets/fonts/GroteskLight.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/GroteskBook.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/GroteskMedium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/GroteskSemiBold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/GroteskBold.otf',
      weight: '700',
      style: 'normal'
    },
  ],
})


export const metadata: Metadata = {
  title: "LUMINA",
  description: "All Inclusive Web3 Marketing Firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
