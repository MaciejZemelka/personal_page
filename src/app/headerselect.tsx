'use client';

import Image from "next/image";
import "./globals.css";
import { usePathname } from 'next/navigation'
import Pheader from "./header";
import Pheaderen from "./en/headerEng";

export default function Headerselect() {
  const pathname = usePathname()
  console.log("pathname" + pathname);
  return (
    <header>
      {pathname === "/en" ? (
        <Pheaderen />
      ) : (
        <Pheader />
      )}
    </header>
  );
}
