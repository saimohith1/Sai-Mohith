import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bingi Sai Mohith | Portfolio",
  description: "Personal portfolio of Bingi Sai Mohith - Dual-degree student in Engineering & Data Science",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`font-sans bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
