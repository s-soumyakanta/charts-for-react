import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navabar from "@/components/Navabar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Charts React",
  description: "Charts in react! by https://s-soumyakanta.com",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  link: "https://s-soumyakanta.com"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><Navabar />{children}</body>
    </html>
  );
}
