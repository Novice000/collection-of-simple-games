import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const play = Play({ subsets: ["latin"],
  weight: "400"
 });


export const metadata: Metadata = {
  title: "Simple Games",
  description: "Simple and fun games to play",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${play.className} antialiased h-screen`}
      >
        <Header /> 
        {children}
      </body>
    </html>
  );
}