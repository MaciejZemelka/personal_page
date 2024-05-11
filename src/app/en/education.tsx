import Image from "next/image";
import "../globals.css";

export default function Education() {
    return (

        <div className="justify-center flex py-10 bg-[#390300]" id="education">
            <div className="w-[60%] max-[1600px]:w-[90%] ">
                <div className=" justify-center flex">
                    <h1 className="text-[50px] max-[600px]:text-[35px]">EDUCATION</h1>

                </div>
                <hr></hr>
                <div className="py-5 text-[21px] font-bold max-[1050px]:text-[16px]">
                    <div className="text-center py-3">
                        <a className="text-[30px] max-[1050px]:text-[24px]">AGH UNIVERSITY OF CRACOW</a><br />
                    </div>
                    <div className="justify-between flex">
                        <a>Faculty of: </a>
                        <a className="max-[700px]:hidden">Metals Engineering and Industrial Computer Science (WIMIIP)</a>
                        <a className="min-[700px]:hidden">WIMIIP</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Major:  </a>
                        <a>Computer Science in Engineering</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Years of attendance: </a>
                        <a>2023-PRESENT</a>
                    </div>

                    <a>Acquired skills: </a>
                    <ul className="list-disc px-[30px]">
                        <li>C++, C</li>
                        <li>BASH linux (ubuntu) - basic commands and C compilator</li>
                    </ul>
                </div>
                <div className="py-5 text-[22px] font-bold max-[1050px]:text-[16px]">
                    <div className="text-center py-3">
                        <a className="text-[30px] max-[1050px]:text-[24px]"> Technikum Energetyczno Elektroniczne im. Tadeusza Kościuszki nr 9 w Krakowie</a><br />
                    </div>
                    <div className="justify-between flex">
                        <a>Profile: </a>
                        <a>IT Specialist</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Years of attendance: </a>
                        <a>2019-2023</a>
                    </div>
                    <div className="justify-between flex">
                        <a>Qualifications: </a>
                        <a>EE.08, EE.09</a>
                    </div>

                    <a>Acquired skills: </a>
                    <ul className="list-disc px-[30px]">
                        <li>HTML, CSS, JS, PHP, SQL</li>
                        <li>JAVA, C++ </li>
                        <li>Certificate: C#, Unity</li>
                        <li>GIMP, CorelDRAW</li>
                        <li>EXCEL, WORD, POWERPOINT, ACCESS</li>
                        <li>Manual testing (Kurs ISTQB)</li>
                        <li>Administration of Windows Serverand Linux (Ubuntu) Server</li>
                        <li>Basics commands of BASH linux</li>
                        <li>Diagnostics and monitoring of PC components</li>
                        <li>Building PC</li>
                        <li>Knowledge of computer networks</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
