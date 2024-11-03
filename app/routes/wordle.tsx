import type { MetaFunction } from "@remix-run/node";
import Wordle from "~/components/Wordle";


export const meta: MetaFunction = () => {

    const seoImg = '/images/wordle-preview.jpg';
  
    return [
      { title: "Wordle Clone" },
      { name: "description", content: "This site is a clone of the popular New York Times game, Wordle! However, as opposed to the original game, you can play this one as many times a day as you'd like!" },
      {
        property: 'og:description',
        content: "This site is a clone of the popular New York Times game, Wordle! However, as opposed to the original game, you can play this one as many times a day as you'd like!",
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

  export default function WordlePage() {

    return (
      <div className="pt-24">
        <Wordle />
      </div>
    )
  }