import Square from "../Components/Square";
import calculateWinner  from "./calculateWinner";

export function Board({xIsNext, onPlay, squares}: BoardProps) {

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner ${winner}`
    : "Next Player " + (xIsNext ? "X" : "O");

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-5">{status}</h1>
      <div className="flex">
        <Square value={squares[0]} updateValue={() => handleClick(0)} />
        <Square value={squares[1]} updateValue={() => handleClick(1)} />
        <Square value={squares[2]} updateValue={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} updateValue={() => handleClick(3)} />
        <Square value={squares[4]} updateValue={() => handleClick(4)} />
        <Square value={squares[5]} updateValue={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} updateValue={() => handleClick(6)} />
        <Square value={squares[7]} updateValue={() => handleClick(7)} />
        <Square value={squares[8]} updateValue={() => handleClick(8)} />
      </div>
    </div>
  );
}

type BoardProps = {
xIsNext: boolean,
onPlay: ()=> void,
squares:(string| null)[]
}