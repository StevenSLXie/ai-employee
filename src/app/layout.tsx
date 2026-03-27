import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "taylon — AI Digital Employee Platform",
  description:
    "Deploy AI employees who proactively work, collaborate, and think alongside your team. Not a tool — a teammate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${geist.variable} antialiased`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
