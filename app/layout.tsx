import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disura Aberathna",
  description: "Undergraduate Software Engineer",
  keywords: [
    "Software Developer",
    "Web Developer",
    "Mobile Application Developer",
  ],
  alternates: {
    canonical: "https://disuraaberathna.com/",
  },
  openGraph: {
    title: "Disura Aberathna",
    type: "website",
    url: "https://disuraaberathna.com/",
    images: [
      {
        url: "https://disuraaberathna.com/profile.webp",
      },
    ],
    description: "Undergraduate Software Engineer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disura Aberathna",
    description: "Undergraduate Software Engineer",
    images: ["https://disuraaberathna.com/profile.webp"],
    site: "https://disuraaberathna.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
