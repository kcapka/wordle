import { Link } from "@remix-run/react";
import { useScrollPosition } from "~/utils/hooks/useScrollPosition";
import Button from "./atoms/Button";
import { useScroll } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={` shadow-xl duration-200 flex z-20 fixed top-0 left-0 w-full`}
    >
      <div className={`${
        scrollPosition > 10 || openMobileNav
          ? "backdrop-blur-xl border-b-border"
          : "border-b-transparent"
      } relative default-px py-6 border-b flex justify-between items-center z-40 w-full`}>
        <Link to="/" onClick={()=> setOpenMobileNav(false)}>
          <img
            src="/images/icons/logo.svg"
            alt="KRC Games Logo"
            className="h-8"
          />
        </Link>
        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 items-center text-lg text-gray-400">
          <Link to="/">
            <li className="hover:text-white duration-200">Home</li>
          </Link>
          <Link to="/models">
            <li className="hover:text-white duration-200">3D Models</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-white duration-200">About</li>
          </Link>
          <Button to="/games">Games</Button>
        </ul>
        {/* Mobile Links */}
        <div
          className="flex flex-col items-center lg:hidden cursor-pointer"
          onClick={() => setOpenMobileNav(!openMobileNav)}
        >
          <div
            className={`${
              openMobileNav ? "rotate-45 translate-y-[9px]" : ""
            } w-[40px] h-[3px] duration-200 my-[3px] bg-border`}
          />
          <div
            className={`${
              openMobileNav ? "opacity-0 w-0" : "opacity-100 w-[40px]"
            } h-[3px] duration-200 my-[3px] bg-border`}
          />
          <div
            className={`${
              openMobileNav ? "rotate-[-45deg] translate-y-[-9px]" : ""
            } w-[40px] h-[3px] duration-200 my-[3px] bg-border`}
          />
        </div>
      </div>
      <div className={`${openMobileNav ? 'h-[100svh]' : 'h-0'} fixed duration-200 top-0 left-0 w-[100svw] overflow-hidden bg-[rgba(0,0,0,0.7)] !backdrop-blur-xl z-30`}>
        <ul className="pt-[80px] flex w-full flex-col items-center text-center text-lg text-gray-400">
          <Link to="/" className="w-full" onClick={()=> setOpenMobileNav(false)}>
            <li className="hover:text-white duration-200 w-full py-4 border-b border-b-border">Home</li>
          </Link>
          <Link to="/models" className="w-full" onClick={()=> setOpenMobileNav(false)}>
            <li className="hover:text-white duration-200 w-full py-4 border-b border-b-border">3D Models</li>
          </Link>
          <Link to="/about" className="w-full" onClick={()=> setOpenMobileNav(false)}>
            <li className="hover:text-white duration-200 w-full py-4 border-b border-b-border">About</li>
          </Link>
          <div className="w-full py-8" onClick={()=> setOpenMobileNav(false)}>
            <Button to="/games">Games</Button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
