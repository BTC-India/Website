import { Metadata } from "next";
import PartnerWithUsForm from "@/app/ui/forms/partner-with-us";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.DOMAIN as string),
    title: "Partner with Us - BTC India",
    description:
      "BTC India is one of the largest bitcoin focussed event happening in the Asia. Partner with us now.",
    keywords: ["bitcoin", "btc", "btc india", "hackathon", "conference"],
    authors: { name: "Manas", url: "https://scienmanas.xyz" },
    robots: "index, follow",
    openGraph: {
      title: "Partner with Us - BTC India",
      description:
        "BTC India is one of the largest bitcoin focussed event happening in the Asia. Partner with us now.",
      url: process.env.DOMAIN,
      type: "website",
      locale: "en_US",
      siteName: process.env.SITE_NAME as string,
    },
    twitter: {
      card: "summary",
      title: "Partner with Us - BTC India",
      description:
        "BTC India is one of the largest bitcoin focussed event happening in the Asia. Partner with us now.",
      creator: "@scienmanas",
      siteId: "@btcindia_org",
      site: process.env.SITE_NAME as string,
    },
  };
}

export default function PartnerWithUs(): JSX.Element {
  return <PartnerWithUsForm />;
}
