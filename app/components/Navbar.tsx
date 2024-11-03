import { Link } from "@remix-run/react";
import { useScrollPosition } from "~/utils/hooks/useScrollPosition";
import Button from "./atoms/Button";

export default function Navbar() {

    const scrollPosition = useScrollPosition();

    return (
        <nav className={`bg-[rgb(16,16,18)] shadow-lg duration-200 flex z-40 fixed top-0 left-0 mb-8 default-px py-4 items-center w-full justify-between`}>
            <Link to="/">
                <img src="/images/icons/logo.svg" alt="KRC Games Logo" className="h-8" />
            </Link>
            <ul className="flex gap-8 items-center absolute top-[50%] translate-y-[-50%] left-1/2 translate-x-[-50%] text-lg text-gray-400">
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
        </nav>
    )
}