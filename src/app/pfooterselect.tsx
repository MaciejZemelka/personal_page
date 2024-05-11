'use client';

import Image from "next/image";
import "./globals.css";
import { usePathname } from 'next/navigation'

import Pfooter from "./pl/pfooter";

export default function Pfooterselect() {
    const pathname = usePathname()
    console.log("pathname" + pathname);
    return (
        <header>
            {pathname === "/en" ? (
                <Pfooter />
            ) : (
                <Pfooter />
            )}
        </header>
    );
}
