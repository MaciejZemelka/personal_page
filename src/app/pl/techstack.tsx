'use client';
import Image from "next/image";
import "../globals.css";
import React, { useState } from "react";

export default function TechStack() {
 
  
  return (
    <div className="justify-center flex py-4">
      <div className="w-[60%] max-[1200px]:w-[70%] max-[830px]:w-[90%]">
        <h1 className="text-center text-[30px] pb-4 font-bold">TECHSTACK</h1>
        <div className="flex justify-center">
            <div className="grid grid-cols-6 max-[920px]:grid-cols-3 max-[920px]:space-y-6 items-center space-x-2">
                <Image
                src={"/images/techstack/html5.png"}
                alt="html5"
                width={90}
                height={100}
                className="stackanimation"
                />
                <Image
                src={"/images/techstack/css3.png"}
                alt="css3"
                width={90}
                height={100}
                className="stackanimation"
                />
                 <Image
                src={"/images/techstack/typescript.png"}
                alt="typescript"
                width={90}
                height={100}
                className="stackanimation"
                />
                <Image
                src={"/images/techstack/react.png"}
                alt="react"
                width={90}
                height={100}
                className="stackanimation"
                />
                 <Image
                src={"/images/techstack/nextjs.png"}
                alt="nextjs"
                width={90}
                height={100}
                className="stackanimation"
                />
                 <Image
                src={"/images/techstack/tailwind.png"}
                alt="tailwind"
                width={100}
                height={100}
                className="stackanimation"
                />
            </div>
        </div>

      </div>
    </div>
  );
}
