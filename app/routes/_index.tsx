import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Wordle from "~/components/Wordle";

export const meta: MetaFunction = () => {
  return [
    { title: "Wordle Clone" },
    { name: "description", content: "This site is a clone of the popular New York Times game, Wordle! However, as opposed to the original game, you can play this one as many times a day as you'd like!" },
  ];
};


export default function Index() {

  return (
    <div>
      <Wordle />
    </div>
  );
}

