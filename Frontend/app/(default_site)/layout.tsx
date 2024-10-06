import type { Metadata } from "next";
import "@/app/globals.css";
// import { Footer } from "@/app/ui/universal/Footer";
import { Navbar } from "@/app/ui/universal/Navbar";
import { Ribbon } from "@/app/ui/landing/Ribbon";
// import metaDataImg from "@/public/assets/metadata/landing.png";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.DOMAIN as string),
  title: "BTC India | Home",
  description:
    "This is the webiste of BTC India (Hackthon + conference) happening at IIT Bombay in December 2024.",
  keywords: ["bitcoin", "btc", "btc india", "blogs", "hackathon", "conference"],
  authors: { name: "Manas", url: "https://scienmanas.xyz" },
  robots: "index, follow",
  openGraph: {
    title: "BTC India | Home",
    description:
      "This is the webiste of BTC India (Hackthon + conference) happening at IIT Bombay in December 2024.",
    url: process.env.DOMAIN,
    type: "website",
    locale: "en_US",
    siteName: process.env.SITE_NAME as string,
    // images: metaDataImg.src,
  },
  twitter: {
    card: "summary",
    title: "BTC India | Home",
    description:
      "This is the webiste of BTC India (Hackthon + conference) happening at IIT Bombay in December 2024.",
    creator: "@scienmanas",
    siteId: "@btcindia_org",
    site: process.env.SITE_NAME as string,
    // images: metaDataImg.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiase bg-transparent bg-gradient-to-br from-[#ffe7b7] to-[#ffe7b8]`}
      >
        <div className="wrapper flex w-full h-fit relative">
          <div className="gradient-blurred absolute w-full h-dvh -z-10 bg-transparent bg-gradient-to-br top-0 left-0 from-yellow-700 to-[#eaeaea] to-45% opacity-30 blur-md"></div>
          <div className="contents-wrapper relative flex flex-col w-full h-fit gap-10 z-10 ">
            <section className="upper-section relative z-20 flex flex-col">
              <section className="navbar w-full h-fit">
                <Navbar />
              </section>
              <section className="ribbon w-full h-fit">
                <Ribbon />
              </section>
            </section>
            <section className="w-full h-full page-contents relative z-10">
              {children}
            </section>
            <section className="footer w-full h-fit flex items-center justify-center z-10">
              {/* <Footer /> */}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
