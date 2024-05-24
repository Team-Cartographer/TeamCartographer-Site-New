"use client"; 

import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const NavButton = ({text, link}: {text: string | React.ReactElement, link: string}) => {
        return (
            <span className="text-muted-foreground transition-all hover:text-white hover:underline cursor-pointer" onClick={() => window.open(link, "_blank")}>{text}</span>
        )
      }
      
    return ( 
        <footer className="absolute bottom-4 pt-20 items-center justify-center">
        <div className="flex flex-row text-muted-foreground text-xs gap-x-4 items-center justify-center">
          <NavButton text={<Github className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />} link={"https://github.com/team-cartographer"} />
          <NavButton text={<Mail className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />} link={"mailto:teamcartographer@gmail.com"} />
          <NavButton text={<Instagram className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />} link={"https://www.instagram.com/team.cartographer/"} />
          <NavButton text={<Linkedin className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />} link={"https://www.linkedin.com/company/team-cartographer"} />
        </div>
      </footer>
     );
}
 
export default Footer;