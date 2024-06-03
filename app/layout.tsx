import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRG-ShopGeoportal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <nav className="flex justify-end w-[90%] mx-auto mt-5">
          <Link href="/about">
            About Server
          </Link>
        </nav>
        <main className="max-w-4xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
