import { useState } from "react";
import Guess from "./Guess";
import Instructions from "./Instructions";
import { motion } from 'framer-motion';

const word = ['r', 'e', 'a', 'c', 't'];

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

  //game states
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);


  //The current guess that is being typed, but not yet submitted
  const [currentSelectedWord, setCurrentSelectedWord] = useState<string[]>([]);

  //indicates which guess the player is currently on. On guess 7, the game is over.
  const [currentGuess, setCurrentGuess] = useState(1);

  //variables for each guess and color for each guess
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

  //This will hold the colors of the letters on the virtual keyboard
  const [keyboardColors, setKeyboardColors] = useState<any>({});

  function handleLetterSelect(letter: string) {
    if(currentGuess < 7 && currentSelectedWord.length < 5){
      setCurrentSelectedWord(prevCurrentSelectedWord => [...prevCurrentSelectedWord, letter]);
    }
  }

  function handleKeyboardColors(key:string, value:string) {
    setKeyboardColors(prevColors => ({
      ...prevColors,
      [key]: value,
    }))
  }

  function handleSubmit() {
    if(currentSelectedWord.length < 5) {
      alert("Please guess a five letter word");
      return;
    } else if(currentSelectedWord.join('') == word.join('')) {
      setWin(true);
      currentSelectedWord.map((letter) => {
        handleKeyboardColors(letter, 'correct');
      })
      if(currentGuess == 1) {
        setGuessOneColors(['correct', 'correct', 'correct', 'correct', 'correct']);
      } else if(currentGuess == 2) {
        setGuessTwoColors(['correct', 'correct', 'correct', 'correct', 'correct']);
      } else if(currentGuess == 3) {
        setGuessThreeColors(['correct', 'correct', 'correct', 'correct', 'correct']);
      } else if(currentGuess == 4) {
        setGuessFourColors(['correct', 'correct', 'correct', 'correct', 'correct']);
      } else if(currentGuess == 5) {
        setGuessFiveColors(['correct', 'correct', 'correct', 'correct', 'correct']);
      } else if(currentGuess == 6) {
        setGuessSixColors(['correct', 'correct', 'correct', 'correct', 'correct']);
      }
    } else if(currentGuess == 1) {
      currentSelectedWord.map((letter, index) => {
        setGuessOne(prevGuessOne => [...prevGuessOne, letter]);
        if(letter == word[index]) {
          handleKeyboardColors(letter, 'correct');
          setGuessOneColors(prevGuessOneColors => [...prevGuessOneColors, 'correct']);
        } else if(word.includes(letter)) {
          handleKeyboardColors(letter, 'yellow')
          setGuessOneColors(prevGuessOneColors => [...prevGuessOneColors, 'yellow']);
        } else {
          handleKeyboardColors(letter, 'wrong');
          setGuessOneColors(prevGuessOneColors => [...prevGuessOneColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(2);
    } else if(currentGuess == 2) {
      currentSelectedWord.map((letter, index) => {
        setGuessTwo(prevGuessTwo => [...prevGuessTwo, letter]);
        if(letter == word[index]) {
          handleKeyboardColors(letter, 'correct');
          setGuessTwoColors(prevGuessTwoColors => [...prevGuessTwoColors, 'correct']);
        } else if(word.includes(letter)) {
          handleKeyboardColors(letter, 'yellow');
          setGuessTwoColors(prevGuessTwoColors => [...prevGuessTwoColors, 'yellow']);
        } else {
          handleKeyboardColors(letter, 'wrong');
          setGuessTwoColors(prevGuessTwoColors => [...prevGuessTwoColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(3);
    } else if(currentGuess == 3) {
      currentSelectedWord.map((letter, index) => {
        setGuessThree(prevGuessThree => [...prevGuessThree, letter]);
        if(letter == word[index]) {
          handleKeyboardColors(letter, 'correct');
          setGuessThreeColors(prevGuessThreeColors => [...prevGuessThreeColors, 'correct']);
        } else if(word.includes(letter)) {
          handleKeyboardColors(letter, 'yellow');
          setGuessThreeColors(prevGuessThreeColors => [...prevGuessThreeColors, 'yellow']);
        } else {
          handleKeyboardColors(letter, 'wrong');
          setGuessThreeColors(prevGuessThreeColors => [...prevGuessThreeColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(4);
    } else if(currentGuess == 4) {
      currentSelectedWord.map((letter, index) => {
        setGuessFour(prevGuessFour => [...prevGuessFour, letter]);
        if(letter == word[index]) {
          handleKeyboardColors(letter, 'correct');
          setGuessFourColors(prevGuessFourColors => [...prevGuessFourColors, 'correct']);
        } else if(word.includes(letter)) {
          handleKeyboardColors(letter, 'yellow');
          setGuessFourColors(prevGuessFourColors => [...prevGuessFourColors, 'yellow']);
        } else {
          handleKeyboardColors(letter, 'wrong');
          setGuessFourColors(prevGuessFourColors => [...prevGuessFourColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(5);
    } else if(currentGuess == 5) {
      currentSelectedWord.map((letter, index) => {
        setGuessFive(prevGuessFive => [...prevGuessFive, letter]);
        if(letter == word[index]) {
          handleKeyboardColors(letter, 'correct');
          setGuessFiveColors(prevGuessFiveColors => [...prevGuessFiveColors, 'correct']);
        } else if(word.includes(letter)) {
          handleKeyboardColors(letter, 'yellow');
          setGuessFiveColors(prevGuessFiveColors => [...prevGuessFiveColors, 'yellow']);
        } else {
          handleKeyboardColors(letter, 'wrong');
          setGuessFiveColors(prevGuessFiveColors => [...prevGuessFiveColors, 'wrong']);
        }
      });
      setCurrentSelectedWord([]);
      setCurrentGuess(6);
    } else if(currentGuess == 6) {
      setLose(true)
      currentSelectedWord.map((letter, index) => {
        setGuessSix(prevGuessSix => [...prevGuessSix, letter]);
        if(letter == word[index]) {
          handleKeyboardColors(letter, 'correct');
          setGuessSixColors(prevGuessSixColors => [...prevGuessSixColors, 'correct']);
        } else if(word.includes(letter)) {
          handleKeyboardColors(letter, 'yellow');
          setGuessSixColors(prevGuessSixColors => [...prevGuessSixColors, 'yellow']);
        } else {
          handleKeyboardColors(letter, 'wrong');
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
    <div className="flex min-h-[100svh] items-center flex-col py-16 justify-start text-white bg-[rgb(18,18,19)]">
      {showInstructions && (
        <Instructions setShowInstructions={setShowInstructions} />
      )}
      <h1 className={`text-center font-sans text-5xl mb-4 tracking-[3.2px] font-bold`}>Wordle</h1>
      
      <div className="mb-4 relative">
        {win && (
          <motion.div 
          initial={{scale: 0}}
          animate={{scale: 1}}
          className="absolute top-1 w-full flex justify-center items-center h-full z-10">
            <p className="text-center text-sm w-[200px] mx-auto py-2 px-6 text-black bg-white rounded">Congrats! You guessed the wordle on guess {currentGuess}</p>
          </motion.div>
        )}
        {lose && (
          <motion.div 
          initial={{scale: 0}}
          animate={{scale: 1}}
          className="absolute top-1 w-full flex justify-center items-center h-full z-10">
            <p className="text-center text-sm w-[200px] mx-auto py-2 px-6 text-black bg-white rounded">Oh no, so close!</p>
          </motion.div>
        )}
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
          <button key={index} onClick={() => handleLetterSelect(letter)} className={`${keyboardColors[letter] == 'correct' ? 'bg-correct' : keyboardColors[letter] == 'yellow' ? 'bg-yellowBackground' : keyboardColors[letter] == 'wrong' ? 'bg-border' : 'bg-grayLetter'} w-8 h-10 md:w-10 md:h-12 rounded flex items-center justify-center uppercase font-bold cursor-pointer`}>
            {letter}
          </button>
        ))}
      </div>
      <div className="flex mb-2 items-center gap-2">
        {keyboardRowTwo.map((letter, index) => (
          <button key={index} onClick={() => handleLetterSelect(letter)} className={`${keyboardColors[letter] == 'correct' ? 'bg-correct' : keyboardColors[letter] == 'yellow' ? 'bg-yellowBackground' : keyboardColors[letter] == 'wrong' ? 'bg-border' : 'bg-grayLetter'} w-8 h-10 md:w-10 md:h-12 rounded flex items-center justify-center uppercase font-bold cursor-pointer`}>
            {letter}
          </button>
        ))}
      </div>
      <div className="flex mb-2 items-center gap-2">
        <button onClick={handleSubmit} className="bg-grayLetter w-12 h-10 md:w-16 md:h-12 rounded text-xs flex items-center justify-center uppercase font-bold cursor-pointer">
            Enter
        </button>
        {keyboardRowThree.map((letter, index) => (
          <button key={index} onClick={() => handleLetterSelect(letter)} className={`${keyboardColors[letter] == 'correct' ? 'bg-correct' : keyboardColors[letter] == 'yellow' ? 'bg-yellowBackground' : keyboardColors[letter] == 'wrong' ? 'bg-border' : 'bg-grayLetter'} w-8 h-10 md:w-10 md:h-12 rounded flex items-center justify-center uppercase font-bold cursor-pointer`}>
            {letter}
          </button>
        ))}
        <button onClick={handleBackSpace} className="bg-grayLetter w-12 h-10 md:w-16 md:h-12 flex items-center justify-center rounded cursor-pointer">
          <img src="/images/icons/back-button.svg" alt="Back button" />
        </button>
      </div>
    </div>
  );
}