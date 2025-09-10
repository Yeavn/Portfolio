import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tim Stoepel I Webentwickler",
  description:
    "Webentwickler mit Leidenschaft seit Jugendtagen: Von Minecraft-Mods über FiveM bis zu modernen Webprojekten. Offen für neue Ideen & Anfragen.",
  keywords: [
    "Webdesign",
    "Webentwicklung",
    "Leipzig",
    "Portfolio",
    "Tim Stoepel",
  ],
  openGraph: {
    title: "Tim Stoepel I Webentwickler",
    description:
      "Webentwickler mit Leidenschaft seit Jugendtagen: Von Minecraft-Mods über FiveM bis zu modernen Webprojekten. Offen für neue Ideen & Anfragen.",
    url: "https://tim-stoepel.de/",
    siteName: "Tim Stoepel - Portfolio",
    locale: "de_DE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
