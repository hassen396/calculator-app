import { useState } from "react";
import { Board } from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  // console.log([1,2,null,null].length, "length")
  // function handleHistory(i) {
  //   history[i] = setHistory([]);
  // }
  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0,currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }
  return (
    <div className="flex gap-12">
      <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      <div className="">
        <h1>History</h1>
        <ul>{moves}</ul>
      </div>
    </div>
  );
}
