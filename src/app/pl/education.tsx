import Image from "next/image";
import "../globals.css";

export default function Education() {
    return (

        <div className="justify-center flex py-10 ">
            <div className="flex justify-center px-2 w-[60%] max-[1600px]:w-[90%] ">
                <div >
                    <div className=" justify-center flex">
                        <h1 className="text-[50px] max-[600px]:text-[35px]  max-[370px]:text-[26px]">EDUKACJA</h1>

                    </div>
                    <hr></hr>
                    <div className="py-5 text-[21px] font-bold max-[1050px]:text-[16px]  max-[330px]:text-[12px]">
                        <div className="text-center py-3">
                            <a className="text-[30px] max-[1050px]:text-[24px] max-[370px]:text-[20px]">Akademia Górniczo-Hutnicza w Krakowie</a><br />
                        </div>
                        <div className=" min-[360px]:flex min-[360px]:justify-between">
                            <a>Wydział:  </a><br className="min-[360px]:hidden"></br>
                            <a className="max-[700px]:hidden">Wydział inżynierii materiału i informatyki przemysłowej (WIMIIP)</a>
                            <a className="min-[700px]:hidden">WIMIIP</a>
                        </div>
                        <div className=" min-[360px]:flex min-[360px]:justify-between">
                            <a>Kierunek:  </a><br className="min-[360px]:hidden"></br>
                            <a>Informatyka Techniczna</a>
                        </div>
                        <div className=" min-[360px]:flex min-[360px]:justify-between">
                            <a>Lata Uczęszczania:  </a><br className="min-[360px]:hidden"></br>
                            <a>2023-TERAZ</a>
                        </div>

                        <a>Nabyte Umiejętności: </a>
                        <ul className="list-disc px-[30px]">
                            <li>C++, C</li>
                            <li>Korzystanie z BASH linux (ubuntu)</li>
                        </ul>
                    </div>
                    <div className="py-5 text-[22px] font-bold max-[1050px]:text-[16px]  max-[330px]:text-[10px]">
                        <div className="text-center py-3">
                            <a className="text-[30px] max-[1050px]:text-[24px] max-[400px]:hidden"> Technikum Energetyczno Elektroniczne im. Tadeusza Kościuszki nr 9 w Krakowie</a><br />
                            <a className="text-[30px] max-[1050px]:text-[24px] min-[400px]:hidden"> ZSE nr 9 w Krakowie</a><br />
                        </div>
                        <div className=" min-[360px]:flex min-[360px]:justify-between">
                            <a>Profil:  </a><br className="min-[360px]:hidden"></br>
                            <a>Technik Informatyk</a>
                        </div>
                        <div className=" min-[360px]:flex min-[360px]:justify-between">
                            <a>Uzyskany Tytuł:  </a><br className="min-[360px]:hidden"></br>
                            <a>Technik</a>
                        </div>
                        <div className=" min-[360px]:flex min-[360px]:justify-between">
                            <a>Lata Uczęszczania:  </a><br className="min-[360px]:hidden"></br>
                            <a>2019-2023</a>
                        </div>
                        <div className=" min-[360px]:flex min-[360px]:justify-between">
                            <a>Kwalifikacje:  </a><br className="min-[360px]:hidden"></br>
                            <a>EE.08, EE.09</a>
                        </div>

                        <a>Nabyte Umiejętności: </a>
                        <ul className="list-disc px-[30px]">
                            <li>HTML, CSS, JS, PHP, SQL</li>
                            <li>JAVA, C++ </li>
                            <li>Certyfikaty: C#, Unity</li>
                            <li>Obróbka zdjęc w GIMP</li>
                            <li>Korzystanie z CorelDRAW</li>
                            <li>EXCEL, WORD, POWERPOINT, ACCESS</li>
                            <li>Testowanie manualne (Kurs ISTQB)</li>
                            <li>Administrowanie Serwerów Windows oraz Linux (Ubuntu)</li>
                            <li>Umiejętność korzystania z BASH linux</li>
                            <li>Diagnostyka i monitorowanie podzespołów</li>
                            <li>Składanie komputerów</li>
                            <li>wiedza z zakresu Sieci komputerowych</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
