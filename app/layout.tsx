import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const HomeButton = dynamic(() => import("@/components/home"));
const Navbar = dynamic(() => import("@/components/nav"));

export const metadata: Metadata = {
  title: "Team Cartographer",
  description: "Welcome to Team Cartographer, a SoCal based STEM-centric group dedicated to educational outreach via Aerospace and Engineering Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="fixed top-5 left-5"><HomeButton /></div>
      <div className="absolute top-5 right-5"><Navbar /></div>
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
