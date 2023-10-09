import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ParentWrapper from "./parent-wrapper";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexcent - Grow With Us",
  description: "Centaur Digital Marketing Front-end Exam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-silver"}>
        <div>
          <ParentWrapper>{children}</ParentWrapper>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
