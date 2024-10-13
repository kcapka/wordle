import { useState } from "react";
import Guess from "./Guess";

const word = ['a', 'p', 'p', 'l', 'e'];

const keyboardRowOne = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p'
];

const keyboardRowTwo = [
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l'
];

const keyboardRowThree = [
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',

]

//borders border
//right letter, wrong spot yellowBackground
//green correct
//gray grayLetter

export default function Wordle() {



  const [currentSelectedWord, setCurrentSelectedWord] = useState<string[]>([]);
  //0 indicates guess 1, 1 is guess 2, and so forth
  const [currentGuess, setCurrentGuess] = useState(1);
  const [guessOne, setGuessOne] = useState<string[]>([]);
  const [guessOneColors, setGuessOneColors] = useState<string[]>([]);
  const [guessTwo, setGuessTwo] = useState<string[]>([]);
  const [guessTwoColors, setGuessTwoColors] = useState<string[]>([]);
  const [guessThree, setGuessThree] = useState<string[]>([]);
  const [guessThreeColors, setGuessThreeColors] = useState<string[]>([]);
  const [guessFour, setGuessFour] = useState<string[]>([]);
  const [guessFourColors, setGuessFourColors] = useState<string[]>([]);
  const [guessFive, setGuessFive] = useState<string[]>([]);
  const [guessFiveColors, setGuessFiveColors] = useState<string[]>([]);
  const [guessSix, setGuessSix] = useState<string[]>([]);
  const [guessSixColors, setGuessSixColors] = useState<string[]>([]);

  function handleLetterSelect(letter: string) {
    if(currentGuess < 7 && currentSelectedWord.length < 5){
      setCurrentSelectedWord(prevCurrentSelectedWord => [...prevCurrentSelectedWord, letter]);
    }
  }

  function handleSubmit() {
    if(currentSelectedWord.length < 5) {
      alert("Please guess a five letter word");
      return;
    } else if(currentGuess == 1) {
      currentSelectedWord.map((letter, index) => {
        setGuessOne(prevGuessOne => [...prevGuessOne, letter]);
        if(letter == word[index]) {
          setGuessOneColors(prevGuessOneColors => [...prevGuessOneColors, 'correct']);
        } else if(word.includes(letter)) {
          setGuessOneColors(prevGuessOneColors => [...prevGuessOneColors, 'yellow']);
        } else {
          setGuessOneColors(prevGuessOneColors => [...prevGuessOneColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(2);
    } else if(currentGuess == 2) {
      currentSelectedWord.map((letter, index) => {
        setGuessTwo(prevGuessTwo => [...prevGuessTwo, letter]);
        if(letter == word[index]) {
          setGuessTwoColors(prevGuessTwoColors => [...prevGuessTwoColors, 'correct']);
        } else if(word.includes(letter)) {
          setGuessTwoColors(prevGuessTwoColors => [...prevGuessTwoColors, 'yellow']);
        } else {
          setGuessTwoColors(prevGuessTwoColors => [...prevGuessTwoColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(3);
    } else if(currentGuess == 3) {
      currentSelectedWord.map((letter, index) => {
        setGuessThree(prevGuessThree => [...prevGuessThree, letter]);
        if(letter == word[index]) {
          setGuessThreeColors(prevGuessThreeColors => [...prevGuessThreeColors, 'correct']);
        } else if(word.includes(letter)) {
          setGuessThreeColors(prevGuessThreeColors => [...prevGuessThreeColors, 'yellow']);
        } else {
          setGuessThreeColors(prevGuessThreeColors => [...prevGuessThreeColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(4);
    } else if(currentGuess == 4) {
      currentSelectedWord.map((letter, index) => {
        setGuessFour(prevGuessFour => [...prevGuessFour, letter]);
        if(letter == word[index]) {
          setGuessFourColors(prevGuessFourColors => [...prevGuessFourColors, 'correct']);
        } else if(word.includes(letter)) {
          setGuessFourColors(prevGuessFourColors => [...prevGuessFourColors, 'yellow']);
        } else {
          setGuessFourColors(prevGuessFourColors => [...prevGuessFourColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(5);
    } else if(currentGuess == 5) {
      currentSelectedWord.map((letter, index) => {
        setGuessFive(prevGuessFive => [...prevGuessFive, letter]);
        if(letter == word[index]) {
          setGuessFiveColors(prevGuessFiveColors => [...prevGuessFiveColors, 'correct']);
        } else if(word.includes(letter)) {
          setGuessFiveColors(prevGuessFiveColors => [...prevGuessFiveColors, 'yellow']);
        } else {
          setGuessFiveColors(prevGuessFiveColors => [...prevGuessFiveColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(6);
    } else if(currentGuess == 6) {
      currentSelectedWord.map((letter, index) => {
        setGuessSix(prevGuessSix => [...prevGuessSix, letter]);
        if(letter == word[index]) {
          setGuessSixColors(prevGuessSixColors => [...prevGuessSixColors, 'correct']);
        } else if(word.includes(letter)) {
          setGuessSixColors(prevGuessSixColors => [...prevGuessSixColors, 'yellow']);
        } else {
          setGuessSixColors(prevGuessSixColors => [...prevGuessSixColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(7);
    }
  }

  function handleBackSpace() {
    if(currentSelectedWord.length > 0) {
      setCurrentSelectedWord((prevCurrentSelectedWord) => prevCurrentSelectedWord.slice(0,-1));
    }
  }

  return (
    <div className="flex min-h-[100svh] items-center flex-col py-16 justify-start text-white bg-[#181818]">
      <div className="mb-6">
        {/* Guesses */}
        <Guess guess={guessOne} currentGuess = {currentGuess} order={1} guessColors={guessOneColors} currentSelectedWord={currentSelectedWord} />
        <Guess guess={guessTwo} currentGuess = {currentGuess} order={2} guessColors={guessTwoColors} currentSelectedWord={currentSelectedWord} />
        <Guess guess={guessThree} currentGuess = {currentGuess} order={3} guessColors={guessThreeColors} currentSelectedWord={currentSelectedWord} />
        <Guess guess={guessFour} currentGuess = {currentGuess} order={4} guessColors={guessFourColors} currentSelectedWord={currentSelectedWord} />
        <Guess guess={guessFive} currentGuess = {currentGuess} order={5} guessColors={guessFiveColors} currentSelectedWord={currentSelectedWord} />
        <Guess guess={guessSix} currentGuess = {currentGuess} order={6} guessColors={guessSixColors} currentSelectedWord={currentSelectedWord} />
      </div>
      <div className="flex mb-2 items-center gap-2">
        {keyboardRowOne.map((letter, index) => (
          <button key={index} onClick={() => handleLetterSelect(letter)} className="bg-[rgb(130,131,132)] w-10 h-12 rounded flex items-center justify-center uppercase font-bold cursor-pointer">
            {letter}
          </button>
        ))}
      </div>
      <div className="flex mb-2 items-center gap-2">
        {keyboardRowTwo.map((letter, index) => (
          <button key={index} onClick={() => handleLetterSelect(letter)} className="bg-grayLetter w-10 h-12 rounded flex items-center justify-center uppercase font-bold cursor-pointer">
            {letter}
          </button>
        ))}
      </div>
      <div className="flex mb-2 items-center gap-2">
        <button onClick={handleSubmit} className="bg-grayLetter w-16 h-12 rounded text-xs flex items-center justify-center uppercase font-bold cursor-pointer">
            Enter
        </button>
        {keyboardRowThree.map((letter, index) => (
          <button key={index} onClick={() => handleLetterSelect(letter)} className="bg-grayLetter w-10 h-12 rounded flex items-center justify-center uppercase font-bold cursor-pointer">
            {letter}
          </button>
        ))}
        <button onClick={handleBackSpace} className="bg-grayLetter w-16 h-12 flex items-center justify-center rounded cursor-pointer">
          <img src="/images/icons/back-button.svg" alt="Back button" />
        </button>
      </div>
    </div>
  );
}