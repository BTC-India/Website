import "@/app/globals.css";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  themeColor: "orange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiase bg-[#ffeed3]`}
      >
        {children}
        <GoogleAnalytics
          gaId={process.env.G_ANALYTICS_ID as string}
          debugMode={false}
        />
        <Analytics />
      </body>
    </html>
  );
}
