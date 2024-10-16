import { useState, useEffect } from "react";
import Guess from "./Guess";
import Instructions from "./Instructions";
import { motion } from 'framer-motion';
import wordList from '../resources/wordList.json';
import { useNavigate } from "@remix-run/react";
import possibleAnswers from '../resources/possibleAnswers.json';

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

// LOCAL STORAGE VARIABLES:
// Wordle answer: ans_w_current
//wrd_alert
//wrd_currentSelectedWord
//wrd_currentGuess
//wrd_guessOne
//wrd_guessOneColors
//wrd_guessTwo
//wrd_guessTwoColors
//wrd_guessThree
//wrd_guessThreeColors
//wrd_guessFour
//wrd_guessFourColors
//wrd_guessFive
//wrd_guessFiveColors
//wrd_guessSix
//wrd_guessSixColors
//wrd_keyboardColors



export default function Wordle() {

  const [word, setWord] = useState<string[]>();

  //game states
  const [alert, setAlert] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  
  //The current guess that is being typed, but not yet submitted
  const [currentSelectedWord, setCurrentSelectedWord] = useState<string[]>([]);

  //indicates which guess the player is currently on. On guess 7, the game is over.
  const [currentGuess, setCurrentGuess] = useState(1);

  //variables for each guess and color for each guess
  //Ideally, I would have all needed variables stored in one variable in an object. For now, they are all separate and I have to store them all in local storage separately
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
      setAlert("Please guess a five letter word");
      setTimeout(() => {
        setAlert('');
      }, 2000);
      return;
    } else if(currentSelectedWord.length > 5) {
      setCurrentSelectedWord([]);
    }  else if(!wordList.some(item => item.word === currentSelectedWord.join(''))) {
      setAlert('Not in the word list!');
      setTimeout(() => {
        setAlert('');
      }, 2000);
      return;
    } else if(currentSelectedWord.join('') == word?.join('')) {
      setAlert(`Congrats! You guessed the wordle on guess ${currentGuess}`);
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
        } else if(word?.includes(letter)) {
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
        } else if(word?.includes(letter)) {
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
        } else if(word?.includes(letter)) {
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
        } else if(word?.includes(letter)) {
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
        } else if(word?.includes(letter)) {
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
      setAlert(`Oh no, so close! The word was ${word?.join('').toUpperCase()}`);
      currentSelectedWord.map((letter, index) => {
        setGuessSix(prevGuessSix => [...prevGuessSix, letter]);
        if(letter == word[index]) {
          handleKeyboardColors(letter, 'correct');
          setGuessSixColors(prevGuessSixColors => [...prevGuessSixColors, 'correct']);
        } else if(word?.includes(letter)) {
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

  const storageKeys = [
    {
      variable: word,
      key: 'ans_w_current',
    },
    {
      variable: currentSelectedWord,
      key: 'wrd_currentSelectedWord',
    },
    {
      variable: currentGuess,
      key: 'wrd_currentGuess',
    },
    {
      variable: guessOne,
      key: 'wrd_guessOne'
    },
    {
      variable: guessOneColors,
      key: 'wrd_guessOneColors'
    },
    {
      variable: guessTwo,
      key: 'wrd_guessTwo'
    },
    {
      variable: guessTwoColors,
      key: 'wrd_guessTwoColors'
    },
    {
      variable: guessThree,
      key: 'wrd_guessThree'
    },
    {
      variable: guessThreeColors,
      key: 'wrd_guessThreeColors'
    },
    {
      variable: guessFour,
      key: 'wrd_guessFour'
    },
    {
      variable: guessFourColors,
      key: 'wrd_guessFourColors'
    },
    {
      variable: guessFive,
      key: 'wrd_guessFive'
    },
    {
      variable: guessFiveColors,
      key: 'wrd_guessFiveColors'
    },
    {
      variable: guessSix,
      key: 'wrd_guessSix'
    },
    {
      variable: guessSixColors,
      key: 'wrd_guessSixColors'
    },
    {
      variable: keyboardColors,
      key: 'wrd_keyboardColors',
    }
  ]

  //Local storage management
  useEffect(() => {

    //hide instructions if already seen
    window.localStorage.getItem('wrd_showInstructions') 
    ? setShowInstructions(false) 
    : setTimeout(() => {
      setShowInstructions(true);
    }, 500);

    //reset all variables
    const wordData = window.localStorage.getItem('ans_w_current');
    if(wordData && wordData !== 'undefined') {
      setWord(JSON.parse(wordData));
    }
    if(!wordData) {
      const randomIndex = Math.floor(Math.random() * 400);
      const baseWord = possibleAnswers[randomIndex].toLowerCase().split('');
      setWord(baseWord);
    }

    const keyboardColorsData = window.localStorage.getItem('wrd_keyboardColors');
    if(keyboardColorsData && keyboardColorsData !== 'undefined' && keyboardColorsData !== '{}') {
      setKeyboardColors(JSON.parse(keyboardColorsData));
    }
    if(!keyboardColorsData) {
      setKeyboardColors([]);
    }

    const currentSelectedWordData = window.localStorage.getItem('wrd_currentSelectedWord');
    if(currentSelectedWordData && currentSelectedWordData !== 'undefined' && currentSelectedWordData !== '[]') {
      setCurrentSelectedWord(JSON.parse(currentSelectedWordData));
    }
    if(!currentSelectedWordData) {
      setCurrentSelectedWord([]);
    }

    const currentGuessData = window.localStorage.getItem('wrd_currentGuess');
    if(currentGuessData && currentGuessData !== 'undefined' && currentGuessData !== '1') {
      setCurrentGuess(JSON.parse(currentGuessData));
    } 
    if(!currentGuessData) {
      setCurrentGuess(1);
    }

    const guessOneData = window.localStorage.getItem('wrd_guessOne');
    if(guessOneData && guessOneData !== 'undefined' && guessOneData !== '[]') {
      setGuessOne(JSON.parse(guessOneData));
    }
    if(!guessOneData) {
      setGuessOne([]);
    }
    const guessOneColors = window.localStorage.getItem('wrd_guessOneColors');
    if(guessOneColors && guessOneColors !== 'undefined' && guessOneColors !== '[]') {
      setGuessOneColors(JSON.parse(guessOneColors));
    }
    if(!guessOneColors) {
      setGuessOneColors([]);
    }

    const guessTwoData = window.localStorage.getItem('wrd_guessTwo');
    if(guessTwoData && guessTwoData !== 'undefined' && guessTwoData !== '[]') {
      setGuessTwo(JSON.parse(guessTwoData));
    }
    if(!guessTwoData) {
      setGuessTwo([]);
    }
    const guessTwoColorsData = window.localStorage.getItem('wrd_guessTwoColors');
    if(guessTwoColorsData && guessTwoColorsData !== 'undefined' && guessTwoColorsData !== '[]') {
      setGuessTwoColors(JSON.parse(guessTwoColorsData));
    }
    if(!guessTwoColorsData) {
      setGuessTwoColors([]);
    }

    const guessThreeData = window.localStorage.getItem('wrd_guessThree');
    if(guessThreeData && guessThreeData !== 'undefined' && guessThreeData !== '[]') {
      setGuessThree(JSON.parse(guessThreeData));
    }
    if(!guessThreeData) {
      setGuessThree([]);
    }
    const guessThreeColorsData = window.localStorage.getItem('wrd_guessThreeColors');
    if(guessThreeColorsData && guessThreeColorsData !== 'undefined' && guessThreeColorsData !== '[]') {
      setGuessThreeColors(JSON.parse(guessThreeColorsData));
    }
    if(!guessThreeColorsData) {
      setGuessThreeColors([]);
    }

    const guessFourData = window.localStorage.getItem('wrd_guessFour');
    if(guessFourData && guessFourData !== 'undefined' && guessFourData !== '[]') {
      setGuessFour(JSON.parse(guessFourData));
    }
    if(!guessFourData) {
      setGuessFour([]);
    }
    const guessFourColorsData = window.localStorage.getItem('wrd_guessFourColors');
    if(guessFourColorsData && guessFourColorsData !== 'undefined' && guessFourColorsData !== '[]') {
      setGuessFourColors(JSON.parse(guessFourColorsData));
    }
    if(!guessFourColorsData) {
      setGuessFourColors([]);
    }

    const guessFiveData = window.localStorage.getItem('wrd_guessFive');
    if(guessFiveData && guessFiveData !== 'undefined' && guessFiveData !== '[]') {
      setGuessFive(JSON.parse(guessFiveData));
    }
    if(!guessFiveData) {
      setGuessFive([]);
    }
    const guessFiveColorsData = window.localStorage.getItem('wrd_guessFiveColors');
    if(guessFiveColorsData && guessFiveColorsData !== 'undefined' && guessFiveColorsData !== '[]') {
      setGuessFiveColors(JSON.parse(guessFiveColorsData));
    }
    if(!guessFiveColorsData) {
      setGuessFiveColors([]);
    }

    const guessSixData = window.localStorage.getItem('wrd_guessSix');
    if(guessSixData && guessSixData !== 'undefined' && guessSixData !== '[]') {
      setGuessSix(JSON.parse(guessSixData));
    }
    if(!guessSixData) {
      setGuessSix([]);
    }
    const guessSixColorsData = window.localStorage.getItem('wrd_guessSixColors');
    if(guessSixColorsData && guessSixColorsData !== 'undefined' && guessSixColorsData !== '[]') {
      setGuessSixColors(JSON.parse(guessSixColorsData));
    }
    if(!guessSixColorsData) {
      setGuessSixColors([]);
    }

  }, []);

  useEffect(() => {
    storageKeys.map((key) => {
      window.localStorage.setItem(key.key, JSON.stringify(key.variable));
    });
    window.localStorage.setItem('wrd_showInstructions', 'true')
  }, [word, currentSelectedWord, currentGuess, guessOne, guessOneColors, guessTwo, guessTwoColors, guessThree, guessThreeColors, guessFour, guessFourColors, guessFive, guessFiveColors, guessSix, guessSixColors]);

  //Game reset
  const [showConfirm, setShowConfirm] = useState(false);
  function handleNewGame() {
    setShowConfirm(true);
    setAlert('');
  }
  function handleInstructionsButton() {
    setShowInstructions(true);
    setAlert('');
  }
  function handleReset() {
    window.localStorage.clear();
    window.location.reload();
    window.localStorage.setItem('wrd_showInstructions', 'true');
  }

  return (
    <div className="flex min-h-[100svh] items-center flex-col py-8 px-[20px] md:px-[60px] justify-start text-white bg-[rgb(18,18,19)]">
      {showInstructions && (
        <Instructions setShowInstructions={setShowInstructions} />
      )}
      <nav className="flex gap-8 mb-16 w-full justify-between">
        <h1 className={`font-sans text-xl md:text-5xl mb-4 tracking-[3.2px] font-bold`}>Wordle</h1>
        <div className="flex items-center text-sm md:text-base gap-4">
          <motion.button initial={{scale: .5}} animate={{scale: [1.3, 1]}} className="rounded py-2 px-4 bg-yellowBackground" onClick={handleInstructionsButton}>Instructions</motion.button>
          <motion.button initial={{scale: .5}} animate={{scale: [1.3, 1]}} className="rounded py-2 px-4 bg-correct" onClick={handleNewGame}>New Game</motion.button>
        </div>
      </nav>
      {showConfirm && (
        <div className="fixed w-[100svw] z-10 h-[100svh] top-0 left-0 bg-[rgb(0,0,0,0.7)] flex items-center justify-center">
          <div className="rounded-lg text-lg text-center font-sans bg-[rgb(18,18,19)] p-8 w-full max-w-[600px]">
            <p className="mb-8">Are you sure you want to start a new game? Your current guesses will be reset and a new wordle will be generated.</p>
            <div className="flex items-center gap-4 justify-center">
              <motion.button initial={{scale: .5}} animate={{scale: [1.3, 1]}} className="rounded py-2 px-4 bg-yellowBackground" onClick={() => setShowConfirm(false)}>No, take me back</motion.button>
              <motion.button initial={{scale: .5}} animate={{scale: [1.3, 1]}} className="rounded py-2 px-4 bg-correct" onClick={handleReset}>Yes, I'm sure!</motion.button>
            </div>
          </div>
        </div>
      )}
      <div className="mb-4 relative">
        {alert && (
          <motion.div 
          initial={{scale: 0}}
          animate={{scale: 1}}
          className="absolute top-1 w-full flex justify-center items-center h-full z-10">
            <p className="text-center text-sm w-[200px] mx-auto py-2 px-6 text-black bg-white rounded">{alert}</p>
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
      {/* Keyboard */}
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