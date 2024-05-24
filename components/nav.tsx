"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const NavButton = ({text, onClick}: {text: string; onClick: any}) => {
        return (
            <span className="text-muted-foreground transition-all hover:text-white hover:underline cursor-pointer" onClick={onClick}>{text}</span>
        )
    }

    return ( 
        <div className="flex flex-row text-sm gap-x-3">
            <NavButton text="About" onClick={() => router.push('/about')} />
            <NavButton text="Projects" onClick={() => router.push('/projects')} />
            <NavButton text="Gallery" onClick={() => router.push('/gallery')} />
            <NavButton text="Contact" onClick={() => window.open('mailto:teamcartographer@gmail.com')} />
        </div>
     );
}
 
export default Navbar;