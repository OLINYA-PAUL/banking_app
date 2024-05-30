import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const IBMplexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["700", "400"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Mordern Bank clone",
  description: "The world best banking platform for all",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${IBMplexSerif.className}`}>
        {children}
      </body>
    </html>
  );
}
