import { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  // Handle button clicks
  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput(""); // Clear
    } else if (value === "=") {
      try {
        // Evaluate the expression safely
        // eslint-disable-next-line no-eval
        const result = eval(input);
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  // Handle keyboard input
  const handleKeyDown = (e) => {
    const allowedKeys = "0123456789+-*/()";
    if (allowedKeys.includes(e.key)) {
      setInput((prev) => prev + e.key);
    } else if (e.key === "Enter") {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(input);
        setInput(String(result));
      } catch {
        setInput("Error");
      }
    } else if (e.key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key.toLowerCase() === "c") {
      setInput("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  const buttons = [
    "C",
    "(",
    ")",
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "x",
    "7",
    "8",
    "9",
    "/",
    "0",
    ".",
    "e",
    "=",
  ];

  return (
    <div className="fixed bottom-10 sm:bottom-20 top-50 sm:top-40 left-2 right-2">
      <div className="flex flex-col min-w-60 max-w-100 gap-5 mx-auto mt-10 h-full">
        <div>
          <input
            className="w-full h-30 border-2 rounded-2xl mb-5 text-4xl px-3"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 gap-3 [&>*]: h-4/5">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-4 rounded-full shadow active:scale-95"
              onClick={() => handleButtonClick(btn === "x" ? "*" : btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default Home;
