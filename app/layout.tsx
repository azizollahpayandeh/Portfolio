import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import DotFollowMouse from "@/Components/Modules/DotFollow/DotFollowMouse";
import "./globals.css";
import NavBar from "@/Components/Templates/NavBar/NavBar";

const Sans = Open_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Sans.className}>
      <NavBar />
        {children}
      </body>
    </html>
  );
}
