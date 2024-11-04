import { Link } from "@remix-run/react";
import { useScrollPosition } from "~/utils/hooks/useScrollPosition";
import Button from "./atoms/Button";
import { useScroll } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const scrollPosition = useScrollPosition();

    return (
        <nav className={`shadow-xl duration-200 flex z-40 fixed top-0 left-0 mb-8 default-px py-6 items-center w-full justify-between`} style={scrollPosition > 10 ? {backdropFilter: 'blur(20px)', borderBottom: '1px solid #333333', backgroundColor: 'rgba(0,0,0,0.5)'} : {border: 'none', backgroundColor: 'transparent', backdropFilter: 'none'}}>
            <Link to="/">
                <img src="/images/icons/logo.svg" alt="KRC Games Logo" className="h-8" />
            </Link>
            <div className="lg:flex items-center gap-8 hidden">
            <ul className="flex gap-8 items-center text-lg text-gray-400">
                <Link to="/">
                    <li className="hover:text-white duration-200">Home</li>
                </Link>
                <Link to="/about">
                    <li className="hover:text-white duration-200">About</li>
                </Link>
            </ul>
            <Button to="/games">
                Games
            </Button>
            </div>
            <div className="flex flex-col items-center lg:hidden cursor-pointer" onClick={() => setOpenMobileNav(!openMobileNav)}>
                <div className={`${openMobileNav ? 'rotate-45 translate-y-[9px]' : ''} w-[40px] h-[3px] duration-200 my-[3px] bg-border`} />
                <div className={`${openMobileNav ? 'opacity-0 w-0' : 'opacity-100 w-[40px]'} h-[3px] duration-200 my-[3px] bg-border`} />
                <div className={`${openMobileNav ? 'rotate-[-45deg] translate-y-[-9px]' : ''} w-[40px] h-[3px] duration-200 my-[3px] bg-border`} />
            </div>
        </nav>
    )
}