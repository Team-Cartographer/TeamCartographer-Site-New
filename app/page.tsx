"use client";

import Footer from "@/components/footer";
import { Github, ImageIcon, Instagram, Mail, MapPin, PinIcon, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); 

  return (
    <main className="flex flex-col h-screen p-20 items-center justify-center">
      <div className="flex flex-col md:flex-row gap-x-10">
        <Image src="/IMG_8443.jpeg" alt="Picture of the author" width={500} height={500} className="rounded-3xl drop-shadow-2xl outline-muted-foreground outline" />
        <div className="flex flex-col"> 
          <h1 className="text-3xl pt-8 text-muted-foreground">We are</h1>
          <span className="text-4xl pt-2 font-bold">Team Cartographer</span>
          <p className="pt-6 text-muted-foreground max-w-[300px] text-wrap">
            A SoCal based STEM-centric group dedicated to educational outreach via Aerospace, Computer Science, and Engineering Challenges
          </p>
          <div className="flex flex-col pt-4 gap-y-2">
            <span className="flex flex-row items-center gap-x-2 text-xs"><MapPin className="h-3 w-3" /> Anaheim, CA</span>
            <span className="flex flex-row items-center gap-x-2 text-xs hover:underline cursor-pointer" onClick={() => router.push('/about')}><Users className="h-3 w-3" /> About Us</span>
            <span className="flex flex-row items-center gap-x-2 text-xs hover:underline cursor-pointer" onClick={() => router.push('/gallery')}><ImageIcon className="h-3 w-3" /> Gallery</span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
