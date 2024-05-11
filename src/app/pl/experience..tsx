import Image from "next/image";
import "../globals.css";

export default function Exp() {
    return (

        <div className="justify-center flex py-10 " id="exp">
            <div className="w-[60%] max-[1600px]:w-[90%] ">
                <div className=" justify-center flex">
                    <h1 className="text-[50px] max-[600px]:text-[40px]">DOŚWIADCZENIE</h1>
                </div>

                <hr ></hr>

                <div className="py-5 text-[26px] font-bold max-[1050px]:text-[16px] space-y-5">
                    <div className="border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722]">
                        <div className="flex justify-center ">
                            <Image
                                src={"/images/amso.png"}
                                alt="amso"

                                width={300}
                                height={0}
                            />
                        </div>
                        <a >Stanowisko: Stażysta</a><br />
                        <a>Październik 2020 - Styczeń 2021 (raz w tygodniu)</a><br />
                        <a>Opis:</a>
                        <div className="text-justify">
                            <a className="font-normal">Staż opierał się na testowaniu laptopów specjalnym oprogramowaniem, wymianie dysków, instalowanie systemów windows 10 oraz przygotowania pamięci RAM do sprzedaży. Przez covid część praktyk odbyła się w moich technikum - tam testowałem okablowanie internetowe w salach oraz przygotowywałem/sprawdzałem komputery pod kątem gotowości na nowy semestr szkolny.</a>
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
                        <a >Stanowisko: Stażysta</a><br />
                        <a>grudzień 2021 - styczeń 2022</a><br />
                        <a>Opis:</a>
                        <div className="text-justify">
                        <a className="font-normal">Podczas stażu nasz prowadzący zadawał nam proste zadania w Laravel razem z edukacyjnymi materiałami video, które były nam potrzebne do ich rozwiązania. Zostało też przedstawione jak wygląda praca w ich zespole, jak są przydzielane zadania i jak wygląda struktura ich projektów.</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
