import { sourceCodeProFont } from "@/app/lib/fonts";
import { zenDotFont } from "@/app/lib/fonts";
import { FaExternalLinkAlt } from "react-icons/fa";
import { robotoFont } from "@/app/lib/fonts";

export function AboutAndVision(): JSX.Element {
  return (
    <section className="about-and-vision w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full flex flex-col gap-6 sm:gap-8 md:gap-12 max-w-screen-xl h-fit items-center justify-center px-4">
        <div
          className={`heading ${zenDotFont.className} text-2xl sm:text-3xl md:text-4xl font-bold`}
        >
          About & Vision
        </div>
        <div
          className={`description text-center sm:text-lg text-neutral-600 h-fit w-fit max-w-[700px] ${robotoFont.className}`}
        >
          The premier fest dedicated to promoting Bitcoin adoption in India.{" "}
          <span className="font-bold text-black">BTC India</span> is taking place at
          the prestigious <span className="font-bold text-black">IIT Bombay</span>,
          this event brings together industry leaders, policy makers, investors,
          developers, and enthusiasts from around the world.
        </div>
        <div className="buttons flex flex-col gap-3 mt-2">
          <button className="w-[250px] sm:w-[280px] h-fit py-3 bg-black text-white rounded-md text-center flex flex-row gap-2 items-center justify-center">
            <span
              className={`text-white text-sm sm:text-base ${sourceCodeProFont.className}`}
            >
              To be a Speaker Apply
            </span>
            <FaExternalLinkAlt />
          </button>
          <button className="w-[250px] sm:w-[280px] h-fit py-3 bg-black text-white rounded-md text-center flex flex-row gap-2 items-center justify-center">
            <span
              className={`text-white text-sm sm:text-base ${sourceCodeProFont.className}`}
            >
              To Suggest a Speaker
            </span>
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </section>
  );
}
