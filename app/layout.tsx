import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import VisitorTracker from "../components/VisitorTracker";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loopera.tech - AI-First Development Solutions",
  description: "Custom websites, apps, and AI systems built to launch, automate, and scale your business — beautifully and intelligently.",
  generator: "Loopera.tech",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable} antialiased`}>
        <VisitorTracker />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
