import Image from "next/image";
import btcRoomImg from "@/public/assets/landing/btcroom.png";
import { zenDotFont } from "@/app/lib/fonts";
import { sourceCodeProFont } from "@/app/lib/fonts";
import { FaExternalLinkAlt } from "react-icons/fa";
import kiteImg from "@/public/assets/graphics/kite/kite.png";
import kiteReversedImg from "@/public/assets/graphics/kite/kite-reversed.png";
import cloudleftImg from "@/public/assets/graphics/clouds/cloud-left.png";
import cloudrightImg from "@/public/assets/graphics/clouds/cloud-right.png";
import ballonrightImg from "@/public/assets/graphics/ballons/rocket-left.png";


export function Hero(): JSX.Element {
  return (
    <section className="hero relative w-full h-fit flex items-center justify-center overflow-x-hidden">
      <div className="relative z-10 wrapper w-full max-w-screen-2xl flex flex-col h-fit items-center justify-center px-6 mt-4 sm:mt-12 lg:mt-14">
        <div className="upper-body-text relative z-10 flex flex-col items-center justify-center gap-8">
          <div className="head-texts flex flex-col items-center justify-center gap-2 overflow-x-hidden">
            <div
              className={`head-text ${zenDotFont.className} text-2xl sm:text-4xl md:text-5xl text-center max-w-[300px] sm:max-w-[480px] `}
            >
              Biggest Bitcoin Event in India
            </div>
            <div
              className={`date text-center font-light ${sourceCodeProFont.className}`}
            >
              16th - 18th December, 2024 at IIT BOMBAY
            </div>
            <div
              className={`buttons ${sourceCodeProFont.className} w-48 sm:w-56 flex flex-col gap-3 mt-5`}
            >
              <div className="placeholder w-full h-fit bg-[#ffda33] py-2 text-center rounded-md select-none">
                Coming Soon
              </div>
              <button className="partner-with-us-button w-full h-fit flex items-center flex-row gap-2 justify-center bg-black py-2 rounded-md">
                <span className="text-white text-sm sm:text-base">
                  Partner with Us
                </span>
                <FaExternalLinkAlt className="text-sm sm:text-base text-white" />
              </button>
            </div>
          </div>
          <div className="image">
            <Image src={btcRoomImg} alt="btcroom" width={600} />
          </div>
        </div>
        <div className="framer-images w-full h-full absolute z-0"></div>
        <div className="kite absolute left-0 opacity-40">
          <Image
            width={150}
            alt="kite"
            src={kiteImg}
            className="w-[80px] sm:w-[95px] md:w-[150px] h-auto"
          />
        </div>
        <div className="kite absolute -right-0 -translate-y-2 opacity-40">
          <Image
            width={150}
            alt="kite"
            src={kiteImg}
            className="-rotate-6 w-[80px] sm:w-[95px] md:w-[150px] h-auto"
          />
        </div>
        <div className="kite absolute right-24 top-3 -translate-y-2 opacity-60">
          <Image
            width={150}
            alt="kite"
            src={kiteReversedImg}
            className="w-[80px] sm:w-[95px] md:w-[150px] h-auto"
          />
        </div>
        <div className="kite absolute left-14 -top-0 -translate-y-2 opacity-60">
          <Image
            width={150}
            alt="kite"
            src={kiteReversedImg}
            className="-rotate-45 w-[80px] sm:w-[95px] md:w-[150px] h-auto"
          />
        </div>
        <div className="cloud absolute -right-20 top-0 ">
          <Image
            src={cloudleftImg}
            alt="cloud"
            className="w-[180px] sm:w-[200px] md:w-[250px] h-auto opacity-50"
          />
        </div>
        <div className="cloud absolute right-20 top-40 ">
          <Image
            src={cloudrightImg}
            alt="cloud"
            className="w-[90px] sm:w-[110px] md:w-[130px] h-auto hidden sm:flex"
          />
        </div>
        <div className="cloud absolute left-20 top-48 ">
          <Image
            src={cloudleftImg}
            alt="cloud"
            className="w-[90px] sm:w-[110px] md:w-[130px] h-auto hidden sm:flex"
          />
        </div>
        <div className="cloud absolute -left-20 top-20 ">
          <Image
            src={cloudrightImg}
            alt="cloud"
            className="w-[160px] sm:w-[180px] md:w-[230px] h-auto opacity-50"
          />
        </div>
        <div className="ballon absolute right-4 rotate-90 top-4">
          <Image
            src={ballonrightImg}
            alt="ballon"
            className="w-[50px] sm:w-[70px] md:w-[90px] h-auto opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
