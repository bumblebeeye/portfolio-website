import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Peter (Xinpei Ye) | Portfolio",
    template: "%s | Peter (Xinpei Ye)"
  },
  description:
    "Portfolio of Peter (Xinpei Ye), an aspiring software engineer and data & AI graduate building modern web applications."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
