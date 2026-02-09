import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google"; // Verify this import hasn't changed or if it was different in the original
import "./globals.css";
import { Header } from "../components/header";
import Silk from "../components/silk";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-sentient", // Verify variable name against original file
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
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Silk color="#1a1a1a" />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
