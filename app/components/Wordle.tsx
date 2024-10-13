import { useState } from "react";

const word = 'apple';

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

//borders rgb(58,58,60)
//right letter, wrong spot rgb(178,159,77)
//green rgb(97, 139, 85)
//gray rgb(130,131,132)

export default function Wordle() {



  const [currentSelectedWord, setCurrentSelectedWord] = useState<string[]>([]);
  //0 indicates guess 1, 1 is guess 2, and so forth
  const [currentGuess, setCurrentGuess] = useState(1);
  const [guessOne, setGuessOne] = useState<string[]>([]);
  const [guessTwo, setGuessTwo] = useState<string[]>([]);
  const [guessThree, setGuessThree] = useState<string[]>([]);
  const [guessFour, setGuessFour] = useState<string[]>([]);
  const [guessFive, setGuessFive] = useState<string[]>([]);
  const [guessSix, setGuessSix] = useState<string[]>([]);

  function handleLetterSelect(letter: string) {
    setCurrentSelectedWord(prevCurrentSelectedWord => [...prevCurrentSelectedWord, letter]);
  }

  function handleSubmit() {
    if(currentSelectedWord.length < 5) {
      alert("Please guess a five letter word");
      return;
    } else if(currentGuess == 1) {
      currentSelectedWord.map((letter) => {
        setGuessOne(prevGuessOne => [...prevGuessOne, letter]);
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(2);
    } else if(currentGuess == 2) {
      currentSelectedWord.map((letter) => {
        setGuessTwo(prevGuessTwo => [...prevGuessTwo, letter]);
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(3);
    } else if(currentGuess == 3) {
      currentSelectedWord.map((letter) => {
        setGuessThree(prevGuessThree => [...prevGuessThree, letter]);
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(4);
    } else if(currentGuess == 4) {
      currentSelectedWord.map((letter) => {
        setGuessFour(prevGuessFour => [...prevGuessFour, letter]);
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(5);
    } else if(currentGuess == 5) {
      currentSelectedWord.map((letter) => {
        setGuessFive(prevGuessFive => [...prevGuessFive, letter]);
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(6);
    } else if(currentGuess == 6) {
      currentSelectedWord.map((letter) => {
        setGuessSix(prevGuessSix => [...prevGuessSix, letter]);
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
      <div className="max-w-[350px] mb-8 grid grid-cols-5 items-center justify-items-center gap-2">
        {/* First guess */}
        <div className={`h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-[rgb(58,58,60)]`}>
            <p>{guessOne.length > 0 ? guessOne[0] : currentSelectedWord[0]}</p>
        </div>
        <div className="h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-[rgb(58,58,60)]">
            <p>{guessOne.length > 0 ? guessOne[1] : currentSelectedWord[1]}</p>
        </div>
        <div className="h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-[rgb(58,58,60)]">
            <p>{guessOne.length > 0 ? guessOne[2] : currentSelectedWord[2]}</p>
        </div>
        <div className="h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-[rgb(58,58,60)]">
            <p>{guessOne.length > 0 ? guessOne[3] : currentSelectedWord[3]}</p>
        </div>
        <div className="h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-[rgb(58,58,60)]">
            <p>{guessOne.length > 0 ? guessOne[4] : currentSelectedWord[4]}</p>
        </div>
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
          <button key={index} onClick={() => handleLetterSelect(letter)} className="bg-[rgb(130,131,132)] w-10 h-12 rounded flex items-center justify-center uppercase font-bold cursor-pointer">
            {letter}
          </button>
        ))}
      </div>
      <div className="flex mb-2 items-center gap-2">
        <button onClick={handleSubmit} className="bg-[rgb(130,131,132)] w-16 h-12 rounded text-xs flex items-center justify-center uppercase font-bold cursor-pointer">
            Enter
        </button>
        {keyboardRowThree.map((letter, index) => (
          <button key={index} onClick={() => handleLetterSelect(letter)} className="bg-[rgb(130,131,132)] w-10 h-12 rounded flex items-center justify-center uppercase font-bold cursor-pointer">
            {letter}
          </button>
        ))}
        <button onClick={handleBackSpace} className="bg-[rgb(130,131,132)] w-16 h-12 flex items-center justify-center rounded cursor-pointer">
          <img src="/images/icons/back-button.svg" alt="Back button" />
        </button>
      </div>
    </div>
  );
}