"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { zenDotFont } from "@/app/lib/fonts";
import { sourceCodeProFont } from "@/app/lib/fonts";
import { StaticImageData } from "next/image";
import Marquee from "@/app/ui/components/marquee";
import Image from "next/image";
import cloudfullImg from "@/public/assets/graphics/clouds/cloud-full.png";
import whyImg1 from "@/public/assets/landing/why-img-1.png";
import whyImg2 from "@/public/assets/landing/why-img-2.png";
import prizepoolImg from "@/public/assets/landing/price-pool.png";

interface CardProps {
  title: string;
  frontImg: StaticImageData;
  backtext: string[];
}

export function WhyJoin(): JSX.Element {
  const cardData: CardProps[] = [
    {
      title: "Developers & Builders",
      frontImg: whyImg1,
      backtext: [
        "Free Accommodation and Food.",
        "Extended support in venture building.",
        "Network with fellow best developers.",
        "Career growth opportunities.",
      ],
    },
    {
      title: "Conference Attendees",
      frontImg: whyImg2,
      backtext: [
        "Networking and Growth opportunities.",
        "Interact with top leaders & visionaries.",
        "Focused on Innovation & learning.",
        "Multiple side events & workshops to learn.",
      ],
    },
  ];

  return (
    <section className="why-join w-full h-fit flex flex-col gap-20 items-center justify-center overflow-x-hidden">
      <div className="wrapper flex flex-col gap-20 w-full max-w-screen-xl items-center justify-center h-fit">
        <div
          className={`heading w-fit h-fit ${zenDotFont.className} text-xl sm:text-2xl md:text-3xl text-center`}
        >
          Why Join BTC INDIA ?
        </div>
        <div className="more-info relative w-fit flex items-center justify-center">
          <div className="cards relative z-10 flex flex-row gap-8  flex-wrap items-center justify-center w-fit h-fit">
            {cardData.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                frontImg={data.frontImg}
                backtext={data.backtext}
              />
            ))}
          </div>
          <div className="cloud absolute z-0 w-[150%] h-auto -bottom-10 opacity-10">
            <Image src={cloudfullImg} alt="cloud-img" className="w-fit h-fit" />
          </div>
        </div>
      </div>
      <div className="prize-pool mt-14 w-full h-fit relative py-10">
        <Marquee className="[--duration:40s] [--gap:15rem] relative z-10">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="price-pool w-fit h-fit">
              <Image
                src={prizepoolImg}
                alt="prize pool"
                className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] select-none pointer-events-none"
              />
            </div>
          ))}
        </Marquee>
        <div className="cloud-full absolute bottom-4 z-0 left-10 opacity-45">
          <Image
            src={cloudfullImg}
            alt="cloud"
            className="select-none pointer-events-none w-[150px] md:w-[300px]"
          />
        </div>
        <div className="cloud-full absolute top-4 right-10 opacity-45">
          <Image
            src={cloudfullImg}
            alt="cloud"
            className="select-none pointer-events-none w-[150px] md:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, frontImg, backtext }: CardProps): JSX.Element {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <div
      className="w-[19rem] h-[18rem] sm:w-[20rem] sm:h-[19rem] md:w-[23rem] md:h-[22rem] perspective-1000 rounded-md"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full rounded-md"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-[#ffffff] flex justify-around items-center rounded-md border-black border-2 flex-col gap-4 p-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className={`title ${zenDotFont.className} text-xl font-bold w-fit max-w-[10rem] text-center`}
          >
            {title}
          </div>
          <div className="image">
            <Image src={frontImg} alt="front-img" width={220} />
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-[#ffffff] flex items-center rounded-md border-black border-2 py-4 px-6 sm:px-8 md:px-10 flex-col gap-4"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div
            className={`title ${zenDotFont.className} text-xl font-bold w-fit max-w-[10rem] text-center`}
          >
            {title}
          </div>
          <ul className="info-points flex flex-col gap-1 items-start h-fit w-full list-disc">
            {backtext.map((text, index) => (
              <li
                key={index}
                className={`h-fit w-fit text-wrap text-sm sm:text-base md:text-lg ${sourceCodeProFont.className}`}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
