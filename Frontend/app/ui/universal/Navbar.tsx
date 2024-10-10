"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/assets/logo/logo.png";
import { useState, useEffect } from "react";
import { sourceCodeProFont, MinecraftFont } from "@/app/lib/fonts";

export function Navbar(): JSX.Element {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState<boolean>(false);

  const tabs = [
    { text: "Home", link: "/" },
    { text: "Speakers", link: "#speakers" },
    // { text: "Hackathon", link: "#hackathon" },
    // { text: "Organizers", link: "#organizers" },
    { text: "Blogs", link: "/blog" },
  ];

  return (
    <nav
      className={`w-full h-fit flex items-center justify-center  transition-all duration-300 border-b border-transparent
        `}
    >
      <div className="wrapper relative flex w-full max-w-screen-2xl items-center justify-between">
        <div className="relative flex px-4 md:py-4 lg:py-5 sm:px-6 md:px-8 lg:px-10 py-3 flex-row items-center justify-between w-full">
          <Link href={"/"} className="w-fit h-fit">
            <div className="logo-place flex flex-row gap-2 items-center w-fit h-fit">
              <Image src={logoImg} alt="logo" className="w-[35px] h-[35px]" />

              <div
                style={{
                  letterSpacing: "0.05rem",
                }}
                className={`text-company text-neutral-800 text-xl sm:text-2xl md:text-3xl ${MinecraftFont.className} w-fit h-fit translate-y-[2px]`}
              >
                BTC INDIA
              </div>
            </div>
          </Link>
          <button
            onClick={() => setIsHamburgerOpened(!isHamburgerOpened)}
            className="relative h-fit w-fit flex sm:hidden hamburger flex-col gap-[6px] items-end"
          >
            <div
              style={{
                transform: isHamburgerOpened
                  ? "rotate(45deg) translateY(5px)"
                  : "rotate(0deg) translateY(0px)",
              }}
              className="line relative w-6 h-[3px] bg-neutral-700 duration-200"
            ></div>
            <div
              style={{
                transform: isHamburgerOpened
                  ? "rotate(-45deg) translateY(-5px)"
                  : "rotate(0deg) translateY(0px)",
                width: isHamburgerOpened ? "24px" : "16px",
              }}
              className="line relative w-4 text-end h-[3px] bg-neutral-700 duration-200"
            ></div>
          </button>
          <div className="link-wrapper sm:relative absolute w-full h-fit inset-0 p-4 sm:p-0 top-12 sm:top-0 sm:w-fit ">
            <div
              className={`link-tabs relative inset-0 w-full p-[2px] h-fit items-center`}
            >
              {isHamburgerOpened && (
                <div className="absolute z-0 glow-gradient flex sm:hidden bg-transparent bg-gradient-to-br from-yellow-600 to-orange-500 w-full h-full inset-0 rounded-lg m-auto blur-md"></div>
              )}
              <div
                className={`relative z-10 bg-[#f4f4f5] sm:bg-transparent w-full h-full content-wrapper flex sm:flex-row flex-col gap-4 rounded-lg  p-4 sm:p-0 sm:items-center items-start sm:border-none border-2 border-orange-600 sm:flex ${
                  isHamburgerOpened ? "flex" : "hidden"
                } `}
              >
                <ul className="relative z-10  flex w-fit h-fit gap-4 sm:flex-row flex-col items-start sm:items-center">
                  {tabs.map((tab, index) => (
                    <li key={index}>
                      {tab.link.startsWith("#") ? (
                        <Link
                          href={tab.link}
                          onClick={(e) => {
                            e.preventDefault();
                            const pricingSection = document.getElementById(
                              tab.link.slice(1)
                            );
                            if (pricingSection) {
                              pricingSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                            setIsHamburgerOpened(!isHamburgerOpened);
                          }}
                          className={`duration-200 text-black ${sourceCodeProFont.className} font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:text-orange-900`}
                        >
                          {tab.text}
                        </Link>
                      ) : (
                        <Link
                          onClick={() =>
                            setIsHamburgerOpened(!isHamburgerOpened)
                          }
                          href={tab.link}
                          className={`duration-200 text-black ${sourceCodeProFont.className} font-bold text-sm sm:text-base md:text-lg lg:text-xl  hover:text-orange-900`}
                        >
                          {tab.text}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li className="w-fit h-fit">
                    <Link
                      href={"https://t.me/btcindia_org"}
                      className={`w-fit h-fit ${sourceCodeProFont.className} font-bold sm:text-lg md:text-xl text-white bg-neutral-900 px-4 py-2 rounded-md`}
                    >
                      Join Community
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
