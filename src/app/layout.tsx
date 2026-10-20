import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Singh — Backend & Distributed Systems Engineer",
  description:
    "Minimal, editorial-style engineering portfolio. I build reliable backend services, design asynchronous workflows, and explore the architectural trade-offs that make systems work at scale.",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Apache Kafka",
    "Redis",
    "Docker",
    "Node.js",
    "Microservices",
  ],
  authors: [{ name: "Aditya Singh" }],
  openGraph: {
    title: "Aditya Singh — Backend & Distributed Systems Engineer",
    description:
      "Minimal, editorial-style engineering portfolio. Production systems, queue dynamics, and architectural case studies.",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
