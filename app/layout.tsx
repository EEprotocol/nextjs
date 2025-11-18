import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";

export const metadata: Metadata = {
  title: "TowerC27 | EEprotocol",
  description: "EEprotocol (Keisuke Kondo) Official site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
