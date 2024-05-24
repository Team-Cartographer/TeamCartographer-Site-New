"use client";

import HomeButton from "@/components/home";
import Navbar from "@/components/nav";
import { Github, Instagram, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const NavButton = ({text, link}: {text: string | React.ReactElement, link: string}) => {
    return (
        <span className="text-muted-foreground transition-all hover:text-white hover:underline cursor-pointer" onClick={() => window.open(link, "_blank")}>{text}</span>
    )
  }

  return (
    <main className="flex flex-col h-screen p-20 items-center justify-center">
      <div className="fixed top-5 left-5"><HomeButton /></div>
      <div className="absolute top-5 right-5"><Navbar /></div>

      <div className="flex flex-col md:flex-row gap-x-10">
        <Image src="/IMG_8443.jpeg" alt="Picture of the author" width={500} height={500} className="rounded-3xl drop-shadow-2xl outline-muted-foreground outline" />
        <div className="flex flex-col"> 
          <h1 className="text-3xl pt-20 text-muted-foreground">We are</h1>
          <span className="text-4xl pt-2 font-bold">Team Cartographer</span>
          <p className="pt-6 text-muted-foreground max-w-[300px] text-wrap">
            A SoCal based STEM-centric group dedicated to educational outreach via Aerospace, Computer Science, and Engineering Challenges
          </p>
        </div>
      </div>

      <footer className="absolute bottom-4">
        <div className="flex flex-row text-muted-foreground text-xs gap-x-4">
          <NavButton text={<Github />} link={"https://github.com/team-cartographer"} />
          <NavButton text={<Mail />} link={"mailto:teamcartographer@gmail.com"} />
          <NavButton text={<Instagram />} link={"https://www.instagram.com/team.cartographer/"} />
        </div>
      </footer>
    </main>
  );
}
