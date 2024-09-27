import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import YourLibrary from "@/components/YourLibrary/YourLibrary";
import PlayingView from "@/components/PlayingView/PlayingView";
import ReduxProvider from "@/components/ReduxProvider";
import PlayBar from "@/components/PlayerBar/PlayBar";

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
    <ReduxProvider>
      <html lang="en">
        <body className={`${inter.className} h-screen flex flex-col`}>
          <header className="bg-gray-200 flex-shrink-0">
            <Header />
          </header>

          <div className="flex flex-1 overflow-hidden relative">
            <aside className="bg-red-800 w-64 flex-shrink-0 z-10">
              <YourLibrary />
            </aside>

            <main className="flex flex-col flex-1">
              <div className="flex-1 overflow-auto">{children}</div>
            </main>

            <aside className="bg-yellow-500 w-72 flex-shrink-0 z-10">
              <PlayBar />
            </aside>

            <footer className="absolute bottom-0 left-0 w-full bg-green-700 z-20">
              <PlayingView />
            </footer>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
