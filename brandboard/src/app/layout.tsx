import type { Metadata } from "next";
import {
  Playfair_Display as PlayfairDisplay,
  Work_Sans as WorkSans,
} from "next/font/google";
import "./globals.css";

const serif = PlayfairDisplay({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ita-serif",
});

const sans = WorkSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ita-sans",
});

export const metadata: Metadata = {
  title: "ITAFCOUTURE Brandboard",
  description:
    "Luxury fashion-tech brandboard showcasing the visual identity for ITAFCOUTURE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
