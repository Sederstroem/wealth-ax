import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Wealth.ax",
  description: "Grow your wealth",
    icons: {
      icon: '/icons/favicon_io/favicon-16x16.png'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-lusitana">
        {children}
      </body>
    </html>
  );
}
