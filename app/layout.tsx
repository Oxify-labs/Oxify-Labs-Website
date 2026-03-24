import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { VideoBackground } from "../components/video-background";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Oxify Labs | Systems Architecture",
  description: "Systems architecture for long-term compounding.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/ddxfzuseh/video/upload/v1774330332/background_a1ii7q.mp4"
          type="video/mp4"
        />
      </head>
      <body
        className={`${geistMono.variable} ${instrumentSerif.variable} ${barlow.variable} font-body font-light antialiased relative min-h-screen`}
        suppressHydrationWarning
      >
        <VideoBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
