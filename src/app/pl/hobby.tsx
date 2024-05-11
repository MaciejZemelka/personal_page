import Image from "next/image";
import "../globals.css";

export default function Hobby() {
  return (
    <div className="justify-center flex text-justify">
      <div className="">
        <div>
          <h1 className="text-center text-[30px] pb-5 font-bold pt-[20px]">ZAINTERESOWANIA</h1>
          <div className="grid grid-rows-2 grid-flow-col gap-3  max-[900px]:grid-rows-4 ">
            <div className="grid w-[490px] max-[1300px]:w-[400px] max-[900px]:w-[600px] max-[700px]:w-[450px] max-[500px]:w-[300px] border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722]  ">
              <h2 className="justify-center flex py-2 text-[20px]">MUZYKA</h2>
              <a>To jest chyba największe moje hobby, czasami bawię się w robienie piosenek, pisanie tekstów i próby śpiewania. Niestety nie jest to takie proste, ale napewno chcę rozwijać dusze artysty, która poniękąd drzemie w mojej rodzienie</a>
            </div>
            <div className="grid w-[490px] max-[1300px]:w-[400px] max-[900px]:w-[600px]  max-[700px]:w-[450px] max-[500px]:w-[300px] border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722] ">
              <h2 className="justify-center flex py-2 text-[20px]">PIŁKA NOŻNA</h2>
              <a>Tego już nie nazwałbym hobby, ponieważ nie oglądam meczów i nie siedzię, aż tak w tym, ale za to staram się chodzić raz w tygodniu pograć, aby być w miarę aktywnym sportowo</a>
            </div>
            <div className=" grid w-[490px] max-[1300px]:w-[400px] max-[900px]:w-[600px] max-[700px]:w-[450px] max-[500px]:w-[300px] border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722] ">
              <h2 className="justify-center flex py-2 text-[20px]">GRY KOMPUTEROWE</h2>
              <a>Od tego tak naprawdę, zacząłem przygode z komputerem. Moją ulubioną grą jest CS, spędziłem w nim mase czasu, ale niczego nie żaluję, bo poznałem dzięki temu wielu ludzi i powstało mase wspaniałych wspomnień</a>
            </div>
            <div className="grid w-[490px] max-[1300px]:w-[400px] max-[900px]:w-[600px] max-[700px]:w-[450px] max-[500px]:w-[300px] border-[3px] border-[#F00] rounded-[10px] px-5 pb-3 pt-1 bg-[#722] ">
              <h2 className="justify-center flex py-2 text-[20px]">INWESTOWANIE</h2>
              <a>Bardzo mnie interesują tematy inwestowania w akcje, krypto i generalnie ten rynek. Planuje jak najszybciej zacząć swoją przygodę, aby powoli powiększać swoje oszczędności.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


