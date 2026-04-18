import type { Metadata } from "next";
import { Syne, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aadarsh Praveen — AI/ML Engineer",
  description:
    "AI/ML Engineer and Data Scientist specializing in RAG architectures, LLM systems, and production-grade machine learning solutions.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "RAG",
    "LLM",
    "Data Scientist",
    "Boston",
  ],
  openGraph: {
    title: "Aadarsh Praveen — AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in RAG architectures and LLM systems.",
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
      className={`${syne.variable} ${outfit.variable} ${spaceMono.variable}`}
    >
      <body className="bg-bg-base text-text-primary antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
