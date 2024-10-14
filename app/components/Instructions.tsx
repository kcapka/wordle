import { Link } from "@remix-run/react";


export default function Instructions({setShowInstructions}: any) {

    return (
        <div className="fixed w-[100svw] h-[100svh] top-0 left-0 bg-[rgb(0,0,0,0.7)] flex pt-16 items-start justify-center">
          <div className="bg-[rgb(18,18,19)] relative pt-16 px-12 w-full max-w-[550px] pb-8 rounded-lg overflow-scroll">
            <button className="text-3xl font-bold absolute top-4 right-4" onClick={() => setShowInstructions(false)}>X</button>
            <h1 className="font-serif text-2xl font-bold mb-1">How to play</h1>
            <p className="text-lg font-serif mb-2 font-normal">Guess the Wordle in 6 tries.</p>
            <ul className="list-disc font-thin mb-2">
                <li>Each guess must be a valid 5-letter word.</li>
                <li>The color of the tiles will change to show how close your guess was to the word.</li>
            </ul>
            <p className="text-lg mb-2 font-normal font-sans">Examples</p>
            <div className="flex items-center mb-2 gap-[4px]">
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-correct bg-correct flex items-center justify-center text-2xl">W</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">O</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">R</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">D</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">Y</p>
            </div>
            <p className="mb-4"><strong>W</strong> is in the word and in the correct spot.</p>
            <div className="flex items-center mb-2 gap-[4px]">
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">L</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-yellowBackground bg-yellowBackground flex items-center justify-center text-2xl">I</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">G</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">H</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">T</p>
            </div>
            <p className="mb-4"><strong>I</strong> is in the word but in the wrong spot.</p>
            <div className="flex items-center mb-2 gap-[4px]">
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">R</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">O</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">G</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border bg-border flex items-center justify-center text-2xl">U</p>
                <p className="h-10 w-10 p-[4px] font-bold border-2 border-border flex items-center justify-center text-2xl">E</p>
            </div>
            <p className="pb-4 border-b mb-4 border-b-white"><strong>U</strong> is not in the word in any spot.</p>
            <p className="text-xs mb-2">Note: This game and these instructions are taken directlly from the New York Times' game "Wordle". This is an educational and recreational reproduction of said game. Enjoy!</p>
            <Link to="https://www.nytimes.com/games/wordle" target="_blank">
            <p className="text-xs no-underline">https://www.nytimes.com/games/wordle</p>
            </Link>
          </div>
        </div>
    )
}