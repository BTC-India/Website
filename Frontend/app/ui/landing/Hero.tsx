import Image from "next/image";
import btcRoomImg from "@/public/assets/landing/btcroom.png";
import kiteImg from "@/public/assets/landing/kite.png";
import { zenDotFont } from "@/app/lib/fonts";
import { sourceCodeProFont } from "@/app/lib/fonts";

export function Hero(): JSX.Element {
  return (
    <section className="hero w-full h-fit flex items-center justify-center">
      <div className="relative wrapper w-full max-w-screen-2xl flex flex-col h-fit items-center justify-center gap-8 px-6">
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
            className={`button px-8 py-2 rounded-sm bg-[#ffda33] ${sourceCodeProFont.className} select-none`}
          >
            Coming Soon
          </div>
        </div>
        <div className="image">
          <Image src={btcRoomImg} alt="btcroom" width={600} />
        </div>
        <div className="kite absolute -left-14 opacity-60">
          <Image width={150} alt="kite" src={kiteImg} />
        </div>
      </div>
    </section>
  );
}
