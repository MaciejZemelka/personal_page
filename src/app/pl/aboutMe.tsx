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
        <h1 className="text-center text-[30px] pb-2 font-bold">O MNIE</h1>
        {/* <a>Witaj! Mam na imię Maciej, na stronie są zawarte informacje, które mogą być dla ciebie interesujące, aby lepiej mnie poznać od strony zawodowej.
           Generalnie aktualnie jestem studentem AGH, na pierwszym roku kierunku Informatyka Techniczna na wydziale inżynierii materiału i informatyki przemysłowej.
           informatyką zacząłem się interesować od końca gimnazjum, wtedy też wybrałem mój kierunek szkoły średniej, czyli technik informatyk w akademii Loretańskiej. 
           Stwierdziłem, że zdobytą już wiedze w szkole zamienie na praktycznie umiejętności i zacząłem tworzyć strony internetowe od strony Front-Endu. Postawiłem na samodzielna nauke freameworku React'a z użyciem 
           TypeScript'a i TailWind. Po poznaniu podstaw tego frameworku jeszcze bardziej się zajawiłem i zacząłem stawiać pierwsze kroki w backend, dokładniej .NET i mam nadzieje, że za niedługo będę się mógł się pochwalić pierwszym projektem.</a> */}
        <div className="space-y-5">
          <div className="text-left border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer boxanimation" onClick={() => showDi("first")}>
            <h2 className="justify-center flex font-bold">KIM JESTEM</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="first">
              <a className="">Mam na imię Maciej. Pochodzę z miejscowości położonej w gminie graniczącej z Krakowem.</a>
            </div>
          </div>
          <div className="text-left  border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer boxanimation" onClick={() => showDi("second")}>

            <h2 className="justify-center flex font-bold max-[300px]:text-[13px]">ZAOCZNY STUDENT AGH</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="second">
              <a className="py-2">Aktualnie jestem zaocznym studentem AGH, na pierwszym roku kierunku Informatyka Techniczna na wydziale inżynierii materiału i informatyki przemysłowej. </a>
            </div>

          </div>
          <div className="text-left border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer boxanimation" onClick={() => showDi("third")} >
            <h2 className="justify-center flex font-bold">TECHNIK INFORMATYK</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="third">
              <a className="">Informatyką zacząłem się interesować pod koniec gimnazjum, wtedy też wybrałem mój kierunek szkoły średniej, czyli technik informatyk na akademii Loretańskiej. </a>
            </div>
          </div>
          <div className="text-left border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer boxanimation" onClick={() => showDi("fourth")}>
            <h2 className="justify-center flex font-bold">SAMOUK FRONT-END</h2>
            <div className="px-3 text-[18px] text-justify hidden" id="fourth">
              <a className="">Stwierdziłem, że zdobytą już wiedze w szkole zamienie na praktycznie umiejętności i zacząłem tworzyć strony internetowe od strony Front-Endu. Postawiłem na samodzielna nauke freameworku React&apos;a z użyciem
                TypeScript&apos;a i TailWind. </a>
            </div>
          </div>
          <div className="text-left border-[3px] border-[#F00] rounded-[24px] py-2 cursor-pointer min-[831px]:hidden boxanimation" onClick={() => showDi("fifth")}>
            <h2 className="justify-center flex font-bold">KONTAKT</h2>
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
              Kontakt
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
