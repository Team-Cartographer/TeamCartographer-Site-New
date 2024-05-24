"use client"; 

import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeButton = () => {
    const router = useRouter(); 
    return ( 
        <div>
            <Image 
                src="/icon.png" 
                alt="team cartographer logo" 
                className="hover:outline hover:outline-muted-foreground rounded-lg drop-shadow-2xl"
                width={25} height={25} 
                onClick={() => router.push("/")}
            />
        </div>
     );
}
 
export default HomeButton;