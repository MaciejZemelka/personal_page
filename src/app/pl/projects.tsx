import Image from "next/image";
import "../globals.css";

export default function Projects() {
    return (
        <div className="justify-center flex" >
            <div className="w-[60%] max-[1600px]:w-[90%]  flex justify-center text-[20px]">
                <div>
                    <div className=" justify-center flex">
                        <h1 className="text-[50px] max-[600px]:text-[40px]">PROJEKTY</h1>
                    </div>
                    <hr />
                    <div className="text-justify pt-3">
                        <a >Poniżej widocznę są zdjęcia poglądowe moich projektów, po klinięciu w dany kafelek można przenieść się do strony z dokładniejszym opisem danego projektu</a>
                    </div>
                    <div className="flex justify-center pt-5">
                        <div className="space-y-5 font-bold text-[20px] max-[440px]:text-[16px]">
                            <div className="grid  border-[3px] border-[#0f0] rounded-[10px] px-5 pb-3 pt-1 bg-[#0b1d02]  ">
                                <h2 className="justify-center flex py-2 ">First-Advanced-Project</h2>
                                <div className="justify-center flex">
                                    <a href="https://github.com/MaciejZemelka/first-advanced-project" target="_blank" className="w-[90%]">
                                        <Image
                                            src={"/images/projects/FirstAdvProject.png"}
                                            alt="FirstAdvProject"
                                            width={1527}
                                            height={903}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="grid  border-[3px] border-[#00f] rounded-[10px] px-5 pb-3 pt-1 bg-[#42A] ">
                                <h2 className="justify-center flex py-2 ">Responsive Dashboard</h2>
                                <div className="justify-center flex">
                                    <a href="https://github.com/MaciejZemelka/ResponsiveDashboard" target="_blank" className="w-[90%]">
                                        <Image
                                            src={"/images/projects/Responsive-Dashboard.png"}
                                            alt="Responsive-dashboard"

                                            width={1886}
                                            height={915}
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


