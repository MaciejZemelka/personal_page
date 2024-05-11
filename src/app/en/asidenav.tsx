'use client';
import Image from "next/image";
import "../globals.css";
import React, { useState } from 'react';

export default function Asidenav() {
  const close = () => {
    const element = document.querySelector("#asd");
    element?.classList.add("hidden");
  };
  return (
    <div className="min-[1400px]:hidden ">
      <div className=" z-30" id="asd" >
        <div className="absolute py-[0px]">
          <div className="absolute bg-black w-[1940px] h-[1000px] right-[-30px] top-[42px] opacity-[80%]" onClick={() => close()}>

          </div>

        </div>
        <div className="absolute w-[300px] text-center right-[0px] bg-[#ed1c24] text-white text-black top-[85px] ">
          <div className="justify-center flex">
            <div>
              <ul className="space-y-[10px] pt-[30px] text-[20px]">
                <li><a href="#education" onClick={() => close()} >EDUCATION</a></li>
                <li><a href="#cert" onClick={() => close()}>CERTIFICATE</a></li>
                <li><a href="#exp" onClick={() => close()}>EXPERIENCE</a></li>
                <li><a href="#projects" onClick={() => close()}>PROJECTS</a></li>
                <li><a href="/CV/MaciejZemełkaCV.pdf" target="_blank" onClick={() => close()}>CV</a></li>
              </ul>
              <div className="flex py-[10px]  items-center space-x-[20px] justify-between ">
                <div className="w-[50%] h-[50%]">
                  <a href="https://github.com/MaciejZemelka?tab=repositories" target="_blank">
                    <Image
                      src={"/images/git.png"}
                      alt="git"
                      className="invert "
                      width={50}
                      height={50}
                    />
                  </a>

                </div>
                <div className="w-[50%] h-[50%]">
                  <a href="https://www.linkedin.com/in/maciej-zeme%C5%82ka-b789992b5/" target="_blank">
                    <Image
                      src={"/images/linkedin.png"}
                      alt="LinkedIn"
                      width={50}
                      height={50}
                    />
                  </a>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
