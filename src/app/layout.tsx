import type React from "react";
import type { Metadata } from "next";
import { Recursive, Inter } from "next/font/google";
import "./globals.css";
import { AuthSync } from "@/components/auth-sync";

export const inter = Inter({ subsets: ["latin"] });
const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shortlistr",
  description:
    "Get instant AI feedback on your resume. Optimize keywords, catch mistakes, and land more interviews—completely free.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} font-sans antialiased`}>
        <AuthSync />
        {children}
      </body>
    </html>
  );
}
