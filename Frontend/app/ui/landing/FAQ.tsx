"use client";
import { useState } from "react";
import { zenDotFont } from "@/app/lib/fonts";
import faqbannerImg from "@/public/assets/landing/faq-banner.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";
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
        "BTC India will be held from December 16th to 18th, 2024, at IIT Bombay, India",
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
    {
      question: "Is there accommodation available for attendees?",
      answer:
        "Yes, Accommodation for Teams participating in the Hackathon is Free but attendees of the conference need to arrange their accommodation.",
    },
    {
      question: "Is the Travel Sponsored for Hackathon teams?",
      answer: "No, Although we have Free Accomodation for you !",
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
                className="individual-wrapper h-fit w-full max-w-[594px] text-wrap flex flex-col border  border-[#d4d4d8] rounded-lg group  hover:border-[#d9d9f3] duration-300 items-center bg-white"
              >
                <div
                  onClick={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                  className="question-and-button py-4 px-6 flex flex-row items-center w-full h-full transition duration-300 cursor-pointer justify-between group"
                >
                  <div className="question font-semibold dark:text-neutral-200 text-neutral-600 dark:group-hover:text-purple-300 group-hover:text-purple-800 duration-300 text-base md:text-lg">
                    {faq.question}
                  </div>
                  <div className="button-arrow group">
                    <IoIosArrowDown
                      className={`text-base md:text-xl dark:group-hover:text-purple-300 group-hover:text-purple-800 duration-500 ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`answer px-6 overflow-hidden transition-[max-height] duration-700 ease-in-out absolute bg-white`}
                  style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}
                >
                  <p className="dark:text-neutral-300 text-neutral-800 py-4 md:text-base text-sm">
                    {faq.answer}
                  </p>
                </div>
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
