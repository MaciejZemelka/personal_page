import Image from "next/image";
import "../globals.css";

export default function Exp() {
    return (

        <div className="justify-center flex py-10 " >
            <div className="w-[60%] max-[1600px]:w-[90%] ">
                <div className=" justify-center flex">
                    <h1 className="text-[50px] max-[600px]:text-[40px]">EXPERIENCE</h1>
                </div>

                <hr ></hr>

                <div className="py-5 text-[26px] font-bold max-[1050px]:text-[16px] space-y-5">
                    <div className="border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722]">
                        <div className="flex justify-center ">
                            <Image
                                src={"/images/AMSO.png"}
                                alt="amso"

                                width={300}
                                height={0}
                            />
                        </div>
                        <a>Position: Trainee</a><br />
                        <a>October 2020 - January 2021 (Once a week)</a><br />
                        <a>Description:</a>
                        <div className="text-justify">
                            <a className="font-normal">The internship was based on testing laptops with special software, replacing disks, installing Windows 10 systems and preparing RAM for sale. Due to Covid, some of the internships took place at my technical high school - there I tested the internet cabling in the classrooms and prepared/checked computers for readiness for the new school semester.</a>
                        </div>
                      
                        
                    </div>
                    <div className="border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722]">
                        <div className="flex justify-center ">
                            <Image
                                src={"/images/polcom.png"}
                                alt="polcom"
                                className="invert"
                                width={350}
                                height={0}
                            />
                        </div>
                        <a>Position: Trainee</a><br />
                        <a>December 2021 - January 2022</a><br />
                        <a>Description:</a>
                        <div className="text-justify">
                        <a className="font-normal">During the internship, our instructor gave us simple tasks in Laravel along with educational video materials that we needed to solve them. He also presented how work in their team looks like, how tasks are assigned and what the structure of their projects looks like.</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
