import { Link } from "@remix-run/react";
import { motion } from 'framer-motion';
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {

    const seoImg = '/images/icons/logo-cartridge.svg';
  
    return [
      { title: "Games | KRC Games" },
      { name: "description", content: "More to come..." },
      {
        property: 'og:description',
        content: "More to come...",
      },
      {
        property: 'og:image',
        content: seoImg,
      },
      {
        property: 'og:image:secure_url',
        content: seoImg,
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '628',
      },
      {
        property: 'og:type',
        content: 'website',
      }
    ];
  };


export default function GamesPage() {

    return (
        <section className="min-h-[100svh] default-px pt-[100px]">
            <div className="max-w-[1200px] mx-auto py-[80px]">
                <h1 className="text-6xl font-display text-white text-center mb-16">Games</h1>
                {/* Games container */}
                <div className="flex justify-center items-center">
                    <Link to="/wordle">
                        <motion.div whileHover={{scale: 1.05}} whileTap={{scale: .95}} className="max-w-[400px] px-8 pt-8 pb-4 rounded bg-[#222222] border border-border">
                            <img src="/images/wordle-logo.png" alt="Wordle logo" className="max-w-[300px] mb-2" />
                            <p className="text-xl font-semibold text-center">Wordle</p>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    )
}