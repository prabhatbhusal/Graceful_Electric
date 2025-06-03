import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import './styles/fonts.css'
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Contact from "@/components/landing/Contact";
// ✅ Correct: relative path from this file (app/layout.tsx)

// Google font
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Graceful Electric",
  description: "Created By ISTEMLAB WEB STUDIOS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${dancingScript.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
