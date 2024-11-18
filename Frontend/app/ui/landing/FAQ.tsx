"use client";
import { useState } from "react";
import { zenDotFont } from "@/app/lib/fonts";
import faqbannerImg from "@/public/assets/landing/faq-banner.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
import { robotoFont } from "@/app/lib/fonts";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ(): JSX.Element {
  // State to track which FAQ is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Array containing FAQ data
  const faqData: FAQItem[] = [
    {
      question: "When and where will BTC India take place?",
      answer:
        "TBA",
    },
    {
      question: "Who is the target audience for BTC India?",
      answer:
        "BTC India is primarily targeted at individuals investing and holding Bitcoin. However, it is also open to newcomers interested in entering the Bitcoin world.",
    },
    {
      question: "Who are the speakers at the conference?",
      answer:
        "The speakers at BTC India will be announced closer to the event date. However, they will be prominent figures in the Bitcoin and blockchain industry.",
    },
    {
      question: "What kind of projects can be submitted to the hackathon?",
      answer:
        "The hackathon will focus on building projects related to Bitcoin. This could include anything from decentralized applications (dApps) to Bitcoin-based infrastructure.",
    },
    {
      question: "How can I register for BTC India?",
      answer:
        "Registration information will be available on the official BTC India website.",
    },
    {
      question: "What is the cost of registration for Hackathons?",
      answer: "NIL",
    },
    {
      question: "Is there an Entry Fee for Conference?",
      answer:
        "Yes, But the prices will be minimal to ensure we attract only serious audience.",
    },
    // {
    //   question: "Is there accommodation available for attendees?",
    //   answer:
    //     "Yes, Accommodation for Teams participating in the Hackathon is Free but attendees of the conference need to arrange their accommodation.",
    // },
    {
      question: "Is the Travel Sponsored for Hackathon teams?",
      answer: "No, Although we have Free Accomodation for you !",
    },
    {
      question: "What is maximum team size?",
      answer: "Max size of team is 5.",
    },
    {
      question: "Do every member need to apply individually",
      answer:
        "You need to form a team in registration dashboard on devfolio.",
    },
    {
      question: "Query not resolved?",
      answer: "Don't worry simply jump to the community and ask.",
    },
  ];

  return (
    <section className="faq w-full flex h-fit items-center justify-center">
      <div className="wrapper w-full h-fit flex flex-col gap-14 max-w-screen-lg items-center justify-center p-6">
        <div
          className={`heading ${zenDotFont.className} text-wrap text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center`}
        >
          Frequently asked questions
        </div>
        <div className="faq-center relative flex flex-row w-full h-fit gap-10 items-center justify-around">
          <div className="faq-content relative z-10 w-fit h-fit flex flex-col gap-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`individual-wrapper h-fit w-full max-w-[594px] text-wrap flex flex-col items-center bg-white relative shadow-sm transition-shadow ${
                  openIndex === index ? "rounded-t-md" : "rounded-md"
                }`}
              >
                <div
                  onClick={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                  className={`question-and-button py-4 px-6 flex flex-row items-center w-full h-full duration-300 cursor-pointer justify-between group gap-4 bg-white border-neutral-300 relative transition-all border ${
                    openIndex === index ? "rounded-t-md" : "rounded-md"
                  }`}
                  style={{
                    boxShadow:
                      openIndex === index
                        ? "0px 0px 15px rgba(0, 0, 0, 0.15)"
                        : "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    className={`question font-semibold  duration-300 text-base md:text-lg bg-white ${robotoFont.className}`}
                  >
                    {faq.question}
                  </div>
                  <div className="button-arrow group">
                    <IoIosArrowDown
                      className={`text-base md:text-xl  duration-500 ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>
                <motion.div
                  className={`answer overflow-hidden absolute bg-white z-20 w-full rounded-b-md ${robotoFont.className}`}
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.3,
                  }}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <p className="text-neutral-800 py-4 md:text-base text-sm border-b border-x border-neutral-300 rounded-b-md px-6">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="image absolute z-0 sm:relative opacity-20 sm:opacity-100 w-fit h-fit">
            <Image alt="faq-banner" src={faqbannerImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
