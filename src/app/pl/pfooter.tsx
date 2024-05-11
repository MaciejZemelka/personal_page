import Image from "next/image";
import "../globals.css";
import React, { useState } from 'react';


export default function Pfooter() {


    return (
        <footer>
            <div className="border-t-[3px] border-[#f00] h-[120px] w-[100%] px-10 bg-black items-center flex justify-center ">
                <div className="w-[90%] flex justify-between text-white py-3 px-2 space-x-[30px] max-[510px]:space-x-[10px] items-center max-[510px]:w-[100%] max-[510px]:text-[12px] max-[510px]:px-1">
                    <div >
                        <a>&copy; 2024-2024 <br /> Maciej Zemełka</a>
                    </div>
                    <div>
                        <h2>CONTACT:</h2>
                        <a>maciejzemelka@gmail.com</a><br />
                        <a href="https://www.linkedin.com/in/maciej-zeme%C5%82ka-b789992b5/" target="_blank">Linkedin</a>

                    </div>
                </div>
            </div>
        </footer>
    );
}
