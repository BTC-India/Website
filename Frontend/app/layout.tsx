import "@/app/globals.css";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

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
        className={`antialiase bg-transparent bg-gradient-to-br from-[#ffe7b7] to-[#ffe7b8]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
