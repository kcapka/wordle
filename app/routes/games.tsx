import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  const seoImg = "/images/icons/logo-cartridge.svg";

  return [
    { title: "Games | KRC Games" },
    { name: "description", content: "More to come..." },
    {
      property: "og:description",
      content: "More to come...",
    },
    {
      property: "og:image",
      content: seoImg,
    },
    {
      property: "og:image:secure_url",
      content: seoImg,
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "628",
    },
    {
      property: "og:type",
      content: "website",
    },
  ];
};

export default function GamesPage() {
  const gameMultiplier = [1, 2, 3, 4, 5, 6];

  return (
    <section>
      <section className="default-px pt-[100px] pb-[80px] md:pt-[200px] text-center">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-6xl max-w-[900px] leading-tight md:leading-tight mx-auto font-display text-white mb-8">
            Explore games to play in your browser
          </h1>
          <div
            className="h-[1px] mx-auto w-1/2 rounded mb-8"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(114,92,246), rgb(92,143,247))",
              boxShadow: "0px 0px 30px 1px rgb(92,143,247)",
            }}
          />
          <p className="text-base md:text-lg max-w-[700px] mx-auto font-[500] text-white">
            This page will include a mix of custom-coded original games and
            custom-coded remakes of existing games.
          </p>
        </div>
      </section>
      <section className="default-px pb-[80px] min-h-[100svh]">
        <div className="max-w-[1400px] mx-auto py-[80px]">
          {/* Games container */}
          <div className="flex justify-center flex-wrap gap-8 items-center">
            {gameMultiplier?.map((game, index) => (
              <Link to="/wordle">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="max-w-[400px] px-8 pt-8 pb-4 rounded bg-[#222222] border border-border"
                >
                  <img
                    src="/images/wordle-logo.png"
                    alt="Wordle logo"
                    className="max-w-[300px] mb-2"
                  />
                  <p className="text-xl font-semibold text-center">Wordle</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
