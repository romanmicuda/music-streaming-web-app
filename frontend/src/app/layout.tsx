import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import YourLibrary from "@/components/YourLibrary/YourLibrary";
import PlayingView from "@/components/PlayingView/PlayingView";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <NavBar />
        <YourLibrary />
        <PlayingView />
        {children}
        <Footer />
      </body>
    </html>
  );
}
