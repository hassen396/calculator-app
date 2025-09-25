import MyButton from "./Counter";
import { useState } from "react";

export default function Counters() {
  const [counters, setCount] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 4 },
  ]);

  function handleClick(counter: { id: number; value: number }) {
    const index = counters.indexOf(counter);
    const newCounters = [...counters];
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    setCount(newCounters);
  }
  function handleReset() {
    const newCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCount(newCounters);
  }
  return (
    <div className="flex flex-col gap-4 h-full justify-center">
      <button className="w-25 rounded-2xl" onClick={handleReset}>
        Reset
      </button>
      <div className="flex flex-col gap-3">
        {counters.map((counter) => (
          <MyButton
            key={counter.id}
            onClick={() => handleClick(counter)}
            value={counter.value}
          />
        ))}
      </div>
    </div>
  );
}
