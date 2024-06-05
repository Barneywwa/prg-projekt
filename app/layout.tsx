import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const rounded = M_PLUS_Rounded_1c({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

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
      <body className={rounded.className}>
        <nav className="flex justify-between w-[90%] mx-auto mt-5 font-bold">
          <Link href="/">Home</Link>
          <Link href="/about">About Server</Link>
        </nav>
        <main className="max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
