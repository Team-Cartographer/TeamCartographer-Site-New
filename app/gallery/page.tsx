"use client"; 

import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Gallery = () => {

    const ImageComponent = ({route}: {route: string}) => {
        return (
            <Image 
                src={route}
                alt="" 
                width={500} 
                height={500} 
                className="rounded-3xl drop-shadow-2xl outline-muted-foreground outline"
            />
        )
    }

    const GalleryFooter = () => {
        const NavButton = ({text, link}: {text: string | React.ReactElement, link: string}) => {
            return (
                <span className="text-muted-foreground transition-all hover:text-white hover:underline cursor-pointer" onClick={() => window.open(link, "_blank")}>{text}</span>
            )
          }
          
        return ( 
            <footer className="items-center justify-center pt-10">
            <div className="flex flex-row text-muted-foreground text-xs gap-x-4 items-center justify-center">
              <NavButton text={<Github className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />} link={"https://github.com/team-cartographer"} />
              <NavButton text={<Mail className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />} link={"mailto:teamcartographer@gmail.com"} />
              <NavButton text={<Instagram className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />} link={"https://www.instagram.com/team.cartographer/"} />
              <NavButton text={<Linkedin className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />} link={"https://www.linkedin.com/company/team-cartographer"} />
            </div>
          </footer>
         );
    }

    return ( 
        <div className="flex flex-col items-center justify-center pt-28 pb-20 gap-y-3">
            <h1 className="text-4xl font-bold pb-10">The Gallery</h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            { /* SUITS PICS */ }
            <ImageComponent route="/IMG_1346.jpeg" />
            <ImageComponent route="/IMG_8265.jpeg" />
            <ImageComponent route="/IMG_8443.jpeg" />
            <ImageComponent route="/IMG_8445.jpeg" />
            <ImageComponent route="/IMG_8313.jpeg" />
            <ImageComponent route="/IMG_1355.jpeg" />
            <ImageComponent route="/IMG_5038.jpeg" />
            <ImageComponent route="/IMG_8320.jpeg" />
            <ImageComponent route="/IMG_5026.jpeg" />
           
            { /* ADC PICS */ }
            <ImageComponent route="/IMG_1766.jpg" />
            <ImageComponent route="/IMG_2208.jpeg" />
            <ImageComponent route="/team-cartographer-presenting-their-application-to-members-of-nasas-scan-team-and-jscs-ses-team_52943882239_o.jpg" />
            <ImageComponent route="/app-development-challenge-staff-and-team-cartographer_52944120160_o.jpg" />
            <ImageComponent route="/app-development-challenge-participants-present-their-application-to-the-public-at-space-center-houston-nasa-johnson-space-centers-official-visitor-center_52943886899_o.jpg" />
            <ImageComponent route="/app-development-challenge-participants-prepare-to-present-to-the-public-at-space-center-houston-nasa-johnson-space-centers-official-visitor-center_52944129240_o.jpg" />
            <ImageComponent route="/70299116773__B83CEB1F-36FD-4C35-B8E6-206256A0CF11.jpeg" />
        </div>
        <GalleryFooter />
        </div>
     );
}
 
export default Gallery;