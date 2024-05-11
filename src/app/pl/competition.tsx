import Image from "next/image";
import "../globals.css";

export default function Comp() {
    return (

        <div className="justify-center flex py-10 bg-[#390300]" id="comp">
            <div className="w-[60%] max-[1600px]:w-[90%] ">
                <div className=" justify-center flex">
                    <h1 className="text-[50px] max-[600px]:text-[40px]">KONKURSY</h1>
                </div>
                <hr></hr>
                <div className="pt-4" >

                    <div className="border-[3px] border-[#F00] bg-[#511] rounded-[30px] p-5 text-justify">
                        <h2 className="text-center font-bold ">WseiCraft 6.0 - 3 miejsce</h2>
                        <div className="pt-3 pb-3">
                            <a className="">Hackathon projektowania gier komputerowych w Construct 3. Polegało to na stworzenie 2 gier w 24 H w zespołach, moja drużyna składała się z 5 osób. Udało nam się zając 3 miejsce. </a>
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
