'use client';
import Image from "next/image";
import "../globals.css";
import React, { useState } from "react";

export default function AboutMe() {
  const showDi = (idd: string) => {
    const first = document.querySelector("#first");
    const second = document.querySelector("#second");
    const third = document.querySelector("#third");
    const fourth = document.querySelector("#fourth");
    const fifth = document.querySelector("#fifth");
    const tab = [first, second, third, fourth, fifth];

    const element = document.querySelector("#" + idd);
    console.log(element?.className + "  " + idd);
    if (element?.classList.contains("hidden")) {
      tab.forEach(divc => {
        divc?.classList.add("hidden");
      });
      element?.classList.remove("hidden");
    }
    else {
      element?.classList.add("hidden");
      tab.forEach(divc => {
        divc?.classList.add("hidden");
      });
    }
  }
  return (
    <div className="justify-center flex">
      <div className="w-[40%] max-[1200px]:w-[60%] max-[830px]:w-[80%]">
        <h1 className="text-center text-[30px] pb-2 font-bold">ABOUT ME</h1>
        <div className="space-y-5">
          <div className="text-left border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer boxanimation" onClick={() => showDi("first")}>
            <h2 className="justify-center flex font-bold">WHO AM I?</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="first">
              <a className="">My name is Maciej. I come from a town located in a commune bordering Krakow.</a>
            </div>
          </div>
          <div className="text-left  border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer boxanimation" onClick={() => showDi("second")}>

            <h2 className="justify-center flex font-bold "><span className="max-[400px]:hidden">EXTRAMURAL&nbsp;</span>STUDENT OF AGH</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="second">
              <a>I&apos;m currently an extramural student of AGH University of Kraków, in the first year of Computer Science In Engineering at the faculty of Material Engineering and Industrial Computer Science. </a>
            </div>

          </div>
          <div className="text-left border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer boxanimation" onClick={() => showDi("third")} >
            <h2 className="justify-center flex font-bold">IT SPECIALIST</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="third">
              <a >I became interested in computer science at the end of secondary school, and that&apos;s when I chose my technical school major, i.e. IT specialist at the ZSE NR.9 in Kraków. </a>
            </div>
          </div>
          <div className="text-left border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer boxanimation" onClick={() => showDi("fourth")}>
            <h2 className="justify-center flex font-bold uppercase"><span className="max-[470px]:hidden">Self learning &nbsp;</span>front-end developer</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="fourth">
              <a >I decided that I would turn the knowledge I had acquired at school into practical skills and I started creating websites from the Front-End side. I decided to independently learn React framework using TypeScript and TailWind. </a>
            </div>
          </div>
          <div className="text-left border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer min-[831px]:hidden boxanimation" onClick={() => showDi("fifth")}>
            <h2 className="justify-center flex font-bold">CONTACT</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="fifth">
              <div className="justify-center flex py-2">
                <Image
                  src={"/images/MZimg.png"}
                  alt="Maciej"
                  className="myimg"
                  width={100}
                  height={100}
                />
              </div>
              <div className="py-[10px] max-[510px]:text-[12px] font-bold">
                <div className="text-center p-3">


                  <div className="block">
                    <a>maciejzemelka@gmail.com</a><br />
                    <a href="https://www.linkedin.com/in/maciej-zeme%C5%82ka-b789992b5/" target="_blank">LinkedIn</a>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="w-[40%] max-[1200px]:w-[30%] max-[830px]:hidden">
        <div className="justify-center flex">
          <Image
            src={"/images/MZimg.png"}
            alt="Maciej"
            className="myimg"
            width={150}
            height={150}
          />
        </div>
        <div className="py-[10px] ">
          <div className="text-center p-3">
            <a className="">
              Contact
            </a>

            <div className=" px-[20%] py-2">
              <hr className=" color-black"></hr>
            </div >

            <div className="block">
              <a>maciejzemelka@gmail.com</a><br />
              <a href="https://www.linkedin.com/in/maciej-zeme%C5%82ka-b789992b5/" target="_blank">LinkedIn</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
