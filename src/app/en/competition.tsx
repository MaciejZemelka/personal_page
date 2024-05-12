import Image from "next/image";
import "../globals.css";

export default function Comp() {
    return (

        <div className="justify-center flex py-10 " >
            <div className="w-[60%] max-[1600px]:w-[90%] ">
                <div className=" justify-center flex">
                    <h1 className="text-[50px] max-[600px]:text-[40px] max-[370px]:text-[24px]">COMPETITION</h1>
                </div>
                <hr></hr>
                <div className="pt-4" >

                    <div className="border-[3px] border-[#F00] bg-[#511] rounded-[30px] p-5 text-justify">
                        <h2 className="text-center font-bold ">WseiCraft 6.0 - 3rd place</h2>
                        <div className="pt-3 pb-3">
                            <a className="">Computer game design hackathon in Construct 3. It involved creating 2 games in 24 hours in teams, my team consisted of 5 people. We managed to take 3rd place. </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://wsei.edu.pl/podsumowanie-6-hackathonu-projektowania-gier-komputerowych-wseicraft/" target="_blank">
                                <Image
                                    src={"/images/zubry.jpg"}
                                    alt="zubry"
                                    width={600}
                                    height={600}
                                />
                            </a>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}
