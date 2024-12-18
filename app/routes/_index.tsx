import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import HomepageHero from "~/components/Homepage/HomepageHero";

export const meta: MetaFunction = () => {

  const seoImg = '/images/icons/logo-cartridge.svg';

  return [
    { title: "KRC Games" },
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


export default function Index() {

  return (
    <div>
      <HomepageHero />
      <div className="default-px py-[80px] flex flex-col gap-10 items-center">
        <h2 className="font-display default-px text-white text-4xl text-center max-w-[800px]">Since this site is currently under construction, click below to play Wordle!</h2>
        <Link to="/wordle">
          <div className="py-4 px-10 text-white font-bold rounded bg-[#222222] border border-border">
            Play Wordle!
          </div>
        </Link>
      </div>
    </div>
  );
}

