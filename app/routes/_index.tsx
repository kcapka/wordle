import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Wordle from "~/components/Wordle";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {

  return (
    <div>
      <Wordle />
    </div>
  );
}

