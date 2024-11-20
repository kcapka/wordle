import Button from "../atoms/Button";
import { Link } from "@remix-run/react";
import NewsletterSignup from "./NewsletterSignup";

export const Footer = () => {
  return (
    <footer className="py-[60px] default-px bg-black text-white">
      <div className="max-w-[1400px] mx-auto pt-12 border-t-2 flex flex-col gap-8 md:flex-row items-center md:justify-between border-t-border">
        <div className="text-white text-sm font-semibold">
          <img
            src="/images/icons/logo.svg"
            alt="KRC Games logo"
            className="mb-12 w-[100px]"
          />
          <div className="flex text-gray-400 items-center gap-4">
            <Button to="/contact">Contact</Button>
            <Link to="/models">
              <p className="hover:text-white duration-300">3D Models</p>
            </Link>
            <Link to="/about">
              <p className="hover:text-white duration-300">About</p>
            </Link>
            <Link to="/games">
              <p className="hover:text-white duration-300">Games</p>
            </Link>
          </div>
        </div>
        <NewsletterSignup />
      </div>
    </footer>
  );
};
