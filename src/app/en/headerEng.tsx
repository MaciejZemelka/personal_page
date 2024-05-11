import Image from "next/image";
import "../globals.css";
import React, { useState } from 'react';
import Asidenav from "./asidenav";
import { channel } from "diagnostics_channel";

export default function Pheader() {
    const [isOpen, SetIsOpen] = useState(0);
    const Change = (IsOpen: number) => {
        IsOpen == 0 ? SetIsOpen(1) : SetIsOpen(0);
    }


    return (
        <div className="fixed top-0 h-[86px] w-[100%] text-white z-20">
            <div className="h-[86px] justify-between w-[100%] flex  pl-10 pr-10 max-[1400px]:pr-0 hbg items-center ">
                <div className="min-[1400px]:w-[20%]  max-[1400px]:w-[80%] py-6 text-[25px] w-[70%] max-[490px]:text-[18px]">
                    <a href="#">Maciej Zemełka</a>
                </div>
                <div className="w-[50%] space-x-[30px] py-5 max-[1400px]:hidden uppercase" >
                    <a href="#education">EDUCATION</a>
                    <a href="#cert">CERTIFICATE</a>
                    <a href="#exp">EXPERIENCE</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#comp">COMPETITION</a>
                    <a href="/CV/MaciejZemełkaCV.pdf" target="_blank">CV</a>
                </div>
                <div className="flex w-[10%] py-3 max-[1400px]:hidden items-center space-x-[20px]">
                    <div >
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
                    <div >
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
                <div className="flex items-center space-x-2 max-[1400px]:w-[200px] max-[880px]:w-[200px] max-[680px]:w-[150px] justify-center ">
                    <div className="">
                            <a href="/" >PL</a>
                            <a className="max-[528px]:hidden"> / </a>

                        <a href="/en" className="text-[#f00] max-[528px]:hidden">ENG</a>
                    </div>
                    <div className="min-[1400px]:hidden pl-4 pt-[2px] ">
                        <a className="corsor-pointer" onClick={() => Change(isOpen)}>
                            <Image
                                src={"/images/hamburger.png"}
                                className="bg-transparent max-[450px]:w-[70px]"
                                alt="Burger"
                                width={50}
                                height={50}

                            />
                        </a>
                    </div>
                    {isOpen === 0 ? (
                        <div></div>
                    ) : (
                        <Asidenav />
                    )}
                </div>

            </div>
        </div>
    );
}
