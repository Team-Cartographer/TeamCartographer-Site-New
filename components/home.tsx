"use client"; 

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HomeButton = () => {
    const router = useRouter(); 
    const [hover, setHover] = useState(false);  
    return ( 
        <div className="flex flex-row">
            <Image 
                src="/icon.png" 
                alt="team cartographer logo" 
                className="hover:outline hover:outline-muted-foreground rounded-lg drop-shadow-2xl transition-all cursor-pointer"
                width={25} height={25} 
                onClick={() => router.push("/")}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
            <p className={`text-muted-foreground transition-all italic ${hover ? "opacity-50" : "opacity-0"} pl-2`}>home</p>
        </div>
     );
}
 
export default HomeButton;