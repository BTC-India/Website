import swapsoLogo from "@/public/assets/footer/swapso.png";
import blockonLogo from "@/public/assets/footer/blockon.png";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";
import { zenDotFont } from "@/app/lib/fonts";
import { sensationFont } from "@/app/lib/fonts";
import boatImg from "@/public/assets/footer/boat.png";

interface socialLinksTypes {
  name: string;
  icon: IconType;
  link: string;
}

export function Footer(): JSX.Element {
  const socialLinks: socialLinksTypes[] = [
    {
      name: "Twitter (X)",
      icon: FaXTwitter,
      link: "https://x.com/btcindia_org",
    },
    {
      name: "Telegram",
      icon: BiLogoTelegram,
      link: "https://t.me/btcindia_org",
    },
  ];

  return (
    <footer className="footer w-full h-fit flex items-center justify-center flex-col">
      <div className="boat-part w-full h-fit items-center justify-center flex flex-col gap-16">
        <div className="wrapper w-full h-fit px-4 max-w-screen-xl">
          <div className="line w-full h-[1px] sm:h-[2px] bg-[#bfb29e] rounded-lg"></div>
        </div>
        <div className="boat w-full h-fit">
          <Image
            src={boatImg}
            alt="boat"
            className="object-cover w-full h-14  sm:h-20 md:h-auto"
          />
        </div>
      </div>
      <div className="actual-part bg-black w-full h-fit flex items-center justify-center pb-12 pt-14 sm:pt-16">
        <div className="wrapper relative flex items-start w-full max-w-screen-xl h-fit flex-col gap-6 px-4">
          <div className="org-logo w-fit flex flex-row items-center h-fit flex-wrap gap-1">
            <Link href={"https://swapso.io"}>
              <Image
                className="w-fit h-fit"
                alt="swapso"
                height={40}
                src={swapsoLogo}
              />
            </Link>
          </div>
          <div className="org-and-links-info w-full h-fit flex flex-row items-center justify-between gap-6 flex-wrap">
            <div className="oragnized-by w-fit h-fit flex flex-col gap-1">
              <div
                className={`w-fit h-fit text-sm sm:text-base text-white ${sensationFont.className}`}
              >
                Organized by
              </div>
              <div
                className={`w-fit h-fit text-wrap font-bold text-base sm:text-lg md:text-xl text-white ${zenDotFont.className}`}
              >
                SwapSo.io
              </div>
            </div>
            <div className="contact-info flex flex-col w-fit h-fit">
              <div className="social flex flex-row gap-2 items-center w-fit h-fit">
                <div className="text text-sm sm:text-base text-neutral-300 w-fit h-fit font-semibold">
                  Contact us:
                </div>
                <div className="social-links flex flex-row gap-1 items-start w-fit h-fit">
                  {socialLinks.map((link, index) => (
                    <Link key={index} href={link.link}>
                      <link.icon className="text-white text-xl" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="email w-fit h-fit text-neutral-300">
                Email:{" "}
                <Link
                  href={"mailto: partnership@btc-india.org"}
                  className="text-sm sm:text-base duration-200 hover:text-neutral-100"
                >
                  partnership@btc-india.org
                </Link>
              </div>
            </div>
          </div>
          <div className="line w-full h-[1px] bg-neutral-400 my-2"></div>
        </div>
      </div>
    </footer>
  );
}
