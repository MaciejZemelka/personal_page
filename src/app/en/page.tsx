import Image from "next/image";
import "../globals.css";
import AboutMe from "./aboutMe";
import Hobby from ".//hobby";
import Education from "./education";
import Cert from "./certificate";
import Exp from ".//experience.";
import Projects from ".//projects";
import Comp from "./competition";
import TechStack from "../pl/techstack";
export default function Home() {
  return (

    <main className="justify-center flex pt-[100px]  pbg">
      <div className="text-white max-[1200px]:w-[90%] w-[80%] justify-center flex bg-[#390300] opacity-[95%] rounded-[20px] z-0">
        <div className="py-[40px]">
          <AboutMe />
          <TechStack />
          <Hobby />
          <div className="h-[50px]" id="education"></div>
          <Education />
          <div className="h-[50px]" id="cert"></div>
          <Cert />
          <div className="h-[50px]" id="exp"></div>
          <Exp />
          <div className="h-[80px]" id="projects"></div>
          <Projects />
          <div className="h-[50px]" id="comp"></div>
          <Comp />

        </div>
      </div>

    </main>
  );
}
