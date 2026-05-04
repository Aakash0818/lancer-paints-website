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

export const metadata = {
  title: "Lancer Paints Pvt Ltd - Premium Paints in Hyderabad",
  description:
    "Interior, exterior primers, wall putty, cement paints, and pigments for durable and premium finishes.",
  openGraph: {
    title: "Lancer Paints Pvt Ltd",
    description: "Premium paints for interior & exterior use",
    url: "https://your-vercel-link.vercel.app",
    siteName: "Lancer Paints",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
