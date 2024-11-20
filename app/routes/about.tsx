import { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
    const seoImg = "/images/icons/logo-cartridge.svg";
  
    return [
      { title: "About | KRC Games" },
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


export default function AboutPage() {

    return (
        <section className="h-[100svh] pt-[100px]">
            <h1 className="text-4xl font-display text-white text-center">Coming soon!</h1>
        </section>
    )
}