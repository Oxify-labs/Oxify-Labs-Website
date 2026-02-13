import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import Silk from "../components/silk";

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
        className={`${geistMono.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#0a0a12]">
          <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
