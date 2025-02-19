import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const play = Luckiest_Guy({ subsets: ["latin"],
  weight: "400",
  preload: true
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
        className={`${play.className} antialiased flex h-screen`}
      >
        <Header /> 
        {children}
      </body>
    </html>
  );
}