import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRG - Geoportal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`${inter.className} bg-gradient-to-r from-blue-900 via-teal-500 to-blue-500`}
      >
        <nav className="flex justify-between max-w-7xl mx-auto px-8 mt-16 rounded-t-xl py-8 bg-white">
          <Link href="/">
            <Button variant="secondary">
              <b>Strona Główna</b>
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="secondary">
              <b>O Serwerze</b>
            </Button>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
