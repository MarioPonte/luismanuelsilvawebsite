import type { Metadata } from "next";
import { Geist, Geist_Mono, Gloock, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gloock = Gloock({
  weight: '400',
  variable: '--font-gloock',
  subsets: ['latin'],
})

const playfairDisplay = Playfair_Display({
  weight: ['400','600','700'],
  variable: '--font-playfair-display',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Luis Manuel Silva",
  description: "Autor, carpinteiro de letras, palavras e linhas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${gloock.variable} ${playfairDisplay.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
