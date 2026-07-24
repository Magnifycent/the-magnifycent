import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://the-magnifycent.vercel.app"),
  title: {
    default: "Gbolahan John Olayinka | The Magnifycent — Full-Stack Developer",
    template: "%s | The Magnifycent",
  },
  description:
    "Gbolahan John Olayinka (The Magnifycent) — a full-stack developer with 7+ years building sleek, design-forward web experiences using TypeScript, Next.js, and Tailwind CSS.",
  keywords: [
    "Gbolahan John Olayinka",
    "The Magnifycent",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer Nigeria",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Gbolahan John Olayinka" }],
  creator: "Gbolahan John Olayinka",
  openGraph: {
    type: "website",
    url: "https://the-magnifycent.vercel.app",
    title: "Gbolahan John Olayinka | The Magnifycent — Full-Stack Developer",
    description:
      "Full-stack developer with 7+ years building sleek, design-forward web experiences using TypeScript, Next.js, and Tailwind CSS.",
    siteName: "The Magnifycent",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Magnifycent — Gbolahan John Olayinka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbolahan John Olayinka | The Magnifycent",
    description:
      "Full-stack developer with 7+ years building sleek, design-forward web experiences.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${bodoniModa.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
