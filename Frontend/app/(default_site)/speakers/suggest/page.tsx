import { Metadata } from "next";
import SuggestSpeakerForm from "@/app/ui/forms/suggest-speaker";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.DOMAIN as string),
    title: "Suggest Speaker - BTC India",
    description:
      "Suggest a speaker which you want to hear at BTC India happening at IIT Bombay in December 2024.",
    keywords: ["bitcoin", "btc", "btc india", "hackathon", "conference"],
    authors: { name: "Manas", url: "https://scienmanas.xyz" },
    robots: "index, follow",
    openGraph: {
      title: "Suggest Speaker - BTC India",
      description:
        "Suggest a speaker which you want to hear at BTC India happening at IIT Bombay in December 2024.",
      url: process.env.DOMAIN,
      type: "website",
      locale: "en_US",
      siteName: process.env.SITE_NAME as string,
    },
    twitter: {
      card: "summary",
      title: "Suggest Speaker - BTC India",
      description:
        "Suggest a speaker which you want to hear at BTC India happening at IIT Bombay in December 2024.",
      creator: "@scienmanas",
      siteId: "@btcindia_org",
      site: process.env.SITE_NAME as string,
    },
  };
}

export default function SuggestSpeaker(): JSX.Element {
  return <SuggestSpeakerForm />;
}
