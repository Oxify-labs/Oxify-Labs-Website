import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-sentient",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
      <body
        className={`${geistMono.variable} ${instrumentSerif.variable} ${barlow.variable} font-body font-light antialiased text-foreground relative min-h-screen bg-black`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover scale-[1.05]"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
