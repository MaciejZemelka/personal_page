import Image from "next/image";
import "../globals.css";

export default function Hobby() {
  return (
    <div className="justify-center flex text-justify">
      <div className="">
        <div>
          <h1 className="text-center text-[30px] pb-5 font-bold pt-[20px]">HOBBY</h1>
          <div className="grid grid-rows-2 grid-flow-col gap-3  max-[900px]:grid-rows-4 ">
            <div className="grid w-[490px] max-[1300px]:w-[400px] max-[900px]:w-[600px] max-[700px]:w-[450px] max-[500px]:w-[300px] border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722]  ">
              <h2 className="justify-center flex py-2 text-[20px]">MUSIC</h2>
              <a>This is probably my biggest hobby, sometimes I enjoy making songs, writing lyrics and trying to sing. Unfortunately, it is not that simple, but I definitely want to develop the artist's soul.</a>
            </div>
            <div className="grid w-[490px] max-[1300px]:w-[400px] max-[900px]:w-[600px]  max-[700px]:w-[450px] max-[500px]:w-[300px] border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722] ">
              <h2 className="justify-center flex py-2 text-[20px]">SOCCER</h2>
              <a>I wouldn't call it a hobby, because I don't watch matches and don't care about any team beside Polish National Team, but I'm trying to play atleast one a week to be active.</a>
            </div>
            <div className=" grid w-[490px] max-[1300px]:w-[400px] max-[900px]:w-[600px] max-[700px]:w-[450px] max-[500px]:w-[300px] border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722] ">
              <h2 className="justify-center flex py-2 text-[20px]">COMPUTER GAMES</h2>
              <a>I started my jurney with computer playing video games. That's why I choose my future job to be sort of related with it. My favourite game is CS and i spend a lot of time in this game, but I don't regret it.</a>
            </div>
            <div className="grid w-[490px] max-[1300px]:w-[400px] max-[900px]:w-[600px] max-[700px]:w-[450px] max-[500px]:w-[300px] border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722] ">
              <h2 className="justify-center flex py-2 text-[20px]">INVESTING</h2>
              <a>I am very interested in investing in stocks, crypto and this market in general. I plan to start my adventure as soon as possible to slowly increase my savings.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


