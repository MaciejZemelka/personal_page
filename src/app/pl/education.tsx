import Image from "next/image";
import "../globals.css";

export default function Education() {
    return (

        <div className="justify-center flex py-10 bg-[#390300]" id="education">
            <div className="w-[60%] max-[1600px]:w-[90%] ">
                <div className=" justify-center flex">
                    <h1 className="text-[50px] max-[600px]:text-[35px]">WYKSZTAŁCENIE</h1>

                </div>
                <hr></hr>
                <div className="py-5 text-[21px] font-bold max-[1050px]:text-[16px]">
                    <div className="text-center py-3">
                        <a className="text-[30px] max-[1050px]:text-[24px]">Akademia Górniczo-Hutnicza w Krakowie</a><br />
                    </div>
                    <div className="justify-between flex">
                        <a>Wydział: </a>
                        <a className="max-[700px]:hidden">Wydział inżynierii materiału i informatyki przemysłowej (WIMIIP)</a>
                        <a className="min-[700px]:hidden">WIMIIP</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Kierunek:  </a>
                        <a>Informatyka Techniczna</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Lata uczęszczania: </a>
                        <a>2023-TERAZ</a>
                    </div>

                    <a>Nabyte Umiejętności: </a>
                    <ul className="list-disc px-[30px]">
                        <li>C++, C</li>
                        <li>Korzystanie z BASH linux (ubuntu)</li>
                    </ul>
                </div>
                <div className="py-5 text-[22px] font-bold max-[1050px]:text-[16px]">
                    <div className="text-center py-3">
                        <a className="text-[30px] max-[1050px]:text-[24px]"> Technikum Energetyczno Elektroniczne im. Tadeusza Kościuszki nr 9 w Krakowie</a><br />
                    </div>
                    <div className="justify-between flex">
                        <a>Profil: </a>
                        <a>Technik Informatyk</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Uzyskany tytuł:  </a>
                        <a>Technik</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Lata uczęszczania: </a>
                        <a>2019-2023</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Kwalifikacje: </a>
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
    );
}
