import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
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
        {/* Video Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-neutral-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-60"
            style={{ minWidth: '100%', minHeight: '100%' }}
          >
            <source src="/silk-1770638581208.webm" type="video/webm" />
          </video>
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
