import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans, GeistMono } from "geist/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sheharyar Ahmed, Software Developer",
  description: "Building efficient, scalable and modular software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-gray-50`}>
        <header className="w-full py-4">
          <div
            className={`font-bold centered-container flex flex-row justify-start items-center text-xl text-black ${GeistMono.className}`}
          >
            <p className="pl-1">Shery</p>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
