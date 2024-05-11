'use client';
import Image from "next/image";
import "../globals.css";
import React, { useState } from 'react';

const images = [
  "/images/SDF.png",
  "/images/CUP.png"
]

export default function Cert() {
  const [DisplayPhoto, SetDisplayPhoto] = useState(3);
  const MaxSize = (imageN: number) => {
    SetDisplayPhoto(imageN)
  }

  return (

    <div className="justify-center flex py-10 " id="cert">
      <div className="w-[60%] max-[1600px]:w-[90%] flex justify-center">
        <div>
          <div className=" text-center">
            <h1 className="text-[50px] max-[600px]:text-[40px]">CERTYFIKATY</h1>
          </div>
          <hr></hr>
          <div className="py-5 text-[18px] text-justify px-4 ">
            <a className="flex justify-center">Podczas uczęszczania do technikum udało mi się wziąć udział w 3 kursach, z czego z 2 uzyskać certyfikat. Poniekąd te 2 certyfikaty są, ze sobą powiązane, ponieważ jeden dotyczył konkretnie języka C#, a drugi Unity, w którym też używaliśmy języka C#.</a>
          </div>
          <div className="grid grid-cols-2 max-[780px]:grid-cols-1">
            <div className="flex justify-center">
              <div className="text-center font-bold">
                <h2>MICROSOFT TECHNOLOGY ASSOCIATE:</h2>
                <h2 className="pb-4">Software Development Fundamentals</h2>
                <a className="cursor-pointer" onClick={() => MaxSize(0)}>
                  <Image
                    src={"/images/SDF.png"}
                    alt="Certyfikat C#"
                    width={400}
                    height={400}
                  />
                </a>
                <h2 className="pt-2"><a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">Verify code: C9vV-XVN9</a></h2>
              </div>
            </div>
            <div className="flex justify-center max-[780px]:pt-4">
              <div className="text-center font-bold">
                <h2 className="uppercase">Certified User:</h2>
                <h2 className="pb-4">Programmer</h2>
                <a className="cursor-pointer" onClick={() => MaxSize(1)}>
                  <Image
                    src={"/images/CUP.png"}
                    alt="Certyfikat Unity"
                    width={400}
                    height={400}
                    id="CUP"
                  />
                </a>
                <h2 className="pt-2"><a href="https://www.certiport.com/portal/pages/credentialverification.aspx" target="_blank">Verify code: 4RcT-XMS8</a></h2>
              </div>
            </div>
          </div>

        </div>
        {DisplayPhoto === 3 ? (
          <div></div>
        ) : (
          <div className="fixed bg-black w-[100%] h-[100%] top-[0px] flex justify-center overflow:hi" onClick={() => MaxSize(3)}>
            <div className="bg-black  flex justify-center items-center">
              <Image
                src={images[DisplayPhoto]}
                alt="certificate"
                className="w-[900px] min-[921px]:pt-[30px] max-[920px]:w-[700px] cursor-pointer"
                width={1000}
                height={80}
              />
            </div>
          </div>
        )
        }
      </div>
    </div>
  );
}
