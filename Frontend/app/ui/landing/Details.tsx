"use client";

import { zenDotFont } from "@/app/lib/fonts";
import { motion } from "framer-motion";
import { useEffect, useState, Fragment } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Define a reusable Card component
interface CardProps {
  title: string;
  content: string[];
  className: string;
  priority: number;
  cardNo: number;
}

interface CardComponentProps extends CardProps {
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
}

export function Details(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Data for the cards
  const cardData: CardProps[] = [
    {
      title: "Hackathon",
      content: [
        "60 Hours for hacking",
        "1 Bitcoin in Prize pool",
        "Track-based bounty system",
        "Selected 120 Builder Teams",
      ],
      className: "bg-[#28c6f4]",
      priority: -1,
      cardNo: 1,
    },
    {
      title: "International Conference",
      content: [
        "Focused on Bitcoin community",
        "3 Days of hyper Bitcoinization",
        "Top Visionaries and speakers",
        "Open for everyone to attend",
      ],
      className: "bg-[#ffadd1]",
      priority: 0,
      cardNo: 2,
    },
    {
      title: "Date & Venue",
      content: ["16th - 18th December, 2024", "At IIT Bombay, India"],
      className: "bg-[#ff7b66]",
      priority: 1,
      cardNo: 3,
    },
  ];

  return (
    <section className="w-full h-fit flex items-center justify-center">
      <div className="wrapper relative w-full h-fit flex items-center justify-center space-x-4 p-8">
        <div className="sm:flex hidden card-holder relative w-[10rem] h-[16rem] sm:w-[18rem] sm:h-[19rem] md:w-[20rem] md:h-96 ">
          {/* Map over the cardData to generate each card */}
          {cardData.map((card, index) => (
            <Card
              key={index}
              priority={card.priority}
              title={card.title}
              content={card.content}
              className={card.className}
              cardNo={card.cardNo}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
            />
          ))}
        </div>
        <div className="card-swipper-full sm:hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className="w-[200px] h-[200px]">
                <div className="card w-[270px] h-[350px] flex items-center border-8 border-white rounded-md">
                  <div
                    className={`rounded-lg w-full h-full ${card.className} text-black flex flex-col sm:gap-1 gap-6 items-center py-6 px-5`}
                  >
                    <h2
                      className={`text-2xl font-semibold ${zenDotFont.className} rounded-sm text-center w-full`}
                    >
                      {card.title}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 w-full">
                      {card.content.map((item, index) => (
                        <li
                          key={index}
                          className={`${zenDotFont.className} text-sm `}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function Card({
  priority,
  title,
  content,
  className,
  cardNo,
  hoveredCard,
  setHoveredCard,
}: CardComponentProps): JSX.Element {
  const [actualPriority, setActualPriority] = useState(priority);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hoverStartTimeout, setHoverStartTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [hoverEndTimeout, setHoverEndTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    if (cardNo === 2 && hoveredCard !== null) {
      setActualPriority(hoveredCard === 1 ? -1 : 1);
    }
    if (cardNo === 2 && hoveredCard == null) {
      setActualPriority(0);
    }
  }, [hoveredCard, cardNo]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },);

  return (
    <motion.div
      whileInView={{
        x: actualPriority * (isSmallScreen ? 160 : 200),
        y: actualPriority === 0 ? -40 : 0,
      }}
      animate={{
        zIndex: actualPriority === 0 ? 20 : 10,
      }}
      onHoverStart={() => {
        // Clear any existing hover end timeout
        if (hoverEndTimeout) {
          clearTimeout(hoverEndTimeout);
        }

        // Set a timeout to delay the setting of hoveredCard
        const timeoutId = setTimeout(() => {
          cardNo !== 2 ? setHoveredCard(cardNo) : null;
          setActualPriority(0);
        }, 300); // Adjust the delay duration as needed

        // Store the timeout ID to clear it later if needed
        setHoverStartTimeout(timeoutId);
      }}
      onHoverEnd={() => {
        // Clear any existing hover start timeout before setting a new one
        if (hoverStartTimeout) {
          clearTimeout(hoverStartTimeout);
        }

        // Set a timeout to delay the reset of the hover state
        const timeoutId = setTimeout(() => {
          setHoveredCard(null);
          setActualPriority(priority);
        }, 300); // Adjust the delay duration as needed

        // Store the timeout ID to clear it later if needed
        setHoverEndTimeout(timeoutId);
      }}
      className={`card-warpper border-8 hidden sm:flex border-white bg-white absolute rounded-xl shadow-lg ${
        cardNo === 2 ? "select-none pointer-events-none" : ""
      }`}
    >
      <div
        className={`rounded-lg w-[10rem] h-[16rem] sm:w-[17rem] sm:h-[18.5rem] md:w-80 md:h-96 sm:p-4 p-6 md:py-8 ${className} text-black flex flex-col sm:gap-1 gap-2 items-center`}
      >
        <h2
          className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 ${zenDotFont.className} rounded-sm text-center`}
        >
          {title}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {content.map((item, index) => (
            <li
              key={index}
              className={`${zenDotFont.className} text-xs sm:text-sm `}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
