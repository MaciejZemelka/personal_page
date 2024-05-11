import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Headerselect from "./headerselect";

import Pfooterselect from "./pfooterselect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaciejZemelka.pl",
  description: "My personal website, with general information about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Headerselect />
        {children}
        <Pfooterselect />
      </body>
    </html>
  );
}
