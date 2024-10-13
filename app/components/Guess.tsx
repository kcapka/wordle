export default function Guess(
  props:any
) {

    const guess = props.guess;
    const guessColors = props.guessColors;
    const currentSelectedWord = props.currentSelectedWord;
    const currentGuess = props.currentGuess;
    const order=props.order;

  return (
    <div className="max-w-[350px] mb-2 grid grid-cols-5 items-center justify-items-center gap-2">
      <div
        className={`h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl ${
          guessColors[0] == "correct"
            ? "bg-correct border-correct"
            : guessColors[0] == "wrong"
            ? "bg-border border-border"
            : guessColors[0] == "yellow"
            ? "bg-yellowBackground border-yellowBackground"
            : "border-border"
        }`}
      >
        <p>{guess.length > 0 ? guess[0] : currentGuess == order ? currentSelectedWord[0] : ''}</p>
      </div>
      <div
        className={`h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-border ${
          guessColors[1] == "correct"
            ? "bg-correct border-correct"
            : guessColors[1] == "wrong"
            ? "bg-border border-border"
            : guessColors[1] == "yellow"
            ? "bg-yellowBackground border-yellowBackground"
            : "border-border"
        }`}
      >
        <p>{guess.length > 0 ? guess[1] : currentGuess == order ? currentSelectedWord[1] : ''}</p>
      </div>
      <div
        className={`h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-border ${
          guessColors[2] == "correct"
            ? "bg-correct border-correct"
            : guessColors[2] == "wrong"
            ? "bg-border border-border"
            : guessColors[2] == "yellow"
            ? "bg-yellowBackground border-yellowBackground"
            : "border-border"
        }`}
      >
        <p>{guess.length > 0 ? guess[2] : currentGuess == order ? currentSelectedWord[2] : ''}</p>
      </div>
      <div
        className={`h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-border ${
          guessColors[3] == "correct"
            ? "bg-correct border-correct"
            : guessColors[3] == "wrong"
            ? "bg-border border-border"
            : guessColors[3] == "yellow"
            ? "bg-yellowBackground border-yellowBackground"
            : "border-border"
        }`}
      >
        <p>{guess.length > 0 ? guess[3] : currentGuess == order ? currentSelectedWord[3] : ''}</p>
      </div>
      <div
        className={`h-12 w-12 border-2 flex justify-center items-center uppercase font-bold text-2xl border-border ${
          guessColors[4] == "correct"
            ? "bg-correct border-correct"
            : guessColors[4] == "wrong"
            ? "bg-border border-border"
            : guessColors[4] == "yellow"
            ? "bg-yellowBackground border-yellowBackground"
            : "border-border"
        }`}
      >
        <p>{guess.length > 0 ? guess[4] : currentGuess == order ? currentSelectedWord[4] : ''}</p>
      </div>
    </div>
  );
}
