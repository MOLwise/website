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
  title: {
    default: "MOLwise | AI-Powered Molecular Intelligence",
    template: "%s | MOLwise",
  },
  description:
    "MOLwise helps research teams analyze molecular data, explore candidate interactions, and accelerate scientific decision-making through intelligent computational workflows.",
  keywords: [
    "MOLwise",
    "molecular discovery",
    "AI molecular analysis",
    "computational biology",
    "aptamer discovery",
    "scientific workflows",
  ],
  authors: [{ name: "MOLwise" }],
  openGraph: {
    title: "MOLwise | AI-Powered Molecular Intelligence",
    description:
      "AI-powered molecular intelligence for modern scientific discovery.",
    type: "website",
    siteName: "MOLwise",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}