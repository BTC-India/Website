import { Metadata } from "next";
import ApplySpeakerForm from "@/app/ui/forms/apply-as-a-speaker";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.DOMAIN as string),
    title: "Apply as a Speaker - BTC India",
    description: "Want to speak at BTC India, apply here.",
    keywords: ["bitcoin", "btc", "btc india", "hackathon", "conference"],
    authors: { name: "Manas", url: "https://scienmanas.xyz" },
    robots: "index, follow",
    openGraph: {
      title: "Apply as a Speaker - BTC India",
      description: "Want to speak at BTC India, apply here.",
      url: process.env.DOMAIN,
      type: "website",
      locale: "en_US",
      siteName: process.env.SITE_NAME as string,
    },
    twitter: {
      card: "summary",
      title: "Apply as a Speaker - BTC India",
      description: "Want to speak at BTC India, apply here.",
      creator: "@scienmanas",
      siteId: "@btcindia_org",
      site: process.env.SITE_NAME as string,
    },
  };
}

export default function ApplySpeaker(): JSX.Element {
  return <ApplySpeakerForm />;
}
