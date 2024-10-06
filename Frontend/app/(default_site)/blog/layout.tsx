import { Metadata } from "next"; 
// import metaDataImg from "@/public/assets/metadata/blog.png"; 

// Generate the metadata for the blogs page
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.DOMAIN as string),
    title: `Blogs - ${process.env.SITE_NAME}`,
    description: "Read the blogs, from heart of BTC India",
    keywords: ["reading", "article", "tech", "knowledge"],
    robots: "index, follow",
    openGraph: {
      title: `Blogs - ${process.env.SITE_NAME}`,
      description: "Read the blogs, from heart of BTC India",
      url: `${process.env.DOMAIN}/blog`,
      //   images: [metaDataImg.src], // Image for OpenGraph
      type: "article",
      siteName: `${process.env.SITE_NAME}`,
      locale: "en_US",
    },
    twitter: {
      card: "summary", // Twitter card type
      title: `Blogs - ${process.env.SITE_NAME}`,
      description: "Read the blogs, from heart of BTC India",
      //   images: [metaDataImg.src],
      creator: "@scienmanas",
      siteId: "@btcindia_org",
      site: `${process.env.DOMAIN}/blog`,
    },
  };
}

// Layout component that wraps the blog page contents
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="page-contents relative w-full h-fit flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
