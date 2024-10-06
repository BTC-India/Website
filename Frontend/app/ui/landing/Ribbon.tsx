import Marquee from "@/app/ui/components/marquee";
import Image from "next/image";
import logoImg from "@/public/assets/logo/logo.png";
import { sourceCodeProFont } from "@/app/lib/fonts";

const ReviewCard = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <Image src={logoImg} width={15} height={15} alt="btc-logo" />
      <div
        className={`w-fit h-fit font-semibold ${sourceCodeProFont.className} text-sm sm:text-base`}
      >
        Asia's biggest BTC Focussed Event
      </div>
    </div>
  );
};

export function Ribbon() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden border border-neutral-800 bg-[#ffc801]">
      <Marquee className="[--duration:20s]">
        {Array.from({ length: 5 }, (_, index) => (
          <ReviewCard key={index} />
        ))}
      </Marquee>
    </div>
  );
}
