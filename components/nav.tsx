"use client"; 


const Navbar = () => {

    const NavButton = ({text}: {text: string}) => {
        return (
            <span className="text-muted-foreground transition-all hover:text-white hover:underline cursor-pointer">{text}</span>
        )
    }

    return ( 
        <div className="flex flex-row text-sm gap-x-3">
            <NavButton text="About" />
            <NavButton text="Projects" />
            <NavButton text="Gallery" />
            <NavButton text="Contact" />
        </div>
     );
}
 
export default Navbar;