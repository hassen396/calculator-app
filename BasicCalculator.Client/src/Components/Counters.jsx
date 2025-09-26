import MyButton from "./Counter";
import { useState } from "react";

export default function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 4 },
  ]);

  function handleIncreament(counter) {
    const index = counters.indexOf(counter);
    const newCounters = [...counters];
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    setCounters(newCounters);
  }

  function handleDecreament(counter) {
    const index = counters.indexOf(counter);
    const newCounters = [...counters];
    newCounters[index] = { ...counter };
    if (newCounters[index].value > 0) {

      newCounters[index].value--;
      setCounters(newCounters);
    }
  }

  function handleDelete(counter) {
    const newCounters = counters.filter(c => c != counter)
    setCounters(newCounters)
  }
  function handleReset() {
    const newCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  }
  const totalCount = counters.filter(c => c.value>0).length;
  return (
    <div className="flex flex-col gap-4 h-full justify-center items-center">
      {counters.length ?
        <div>
          <button className="w-20 rounded-2xl border border-amber-300 bg-blue-500 active:scale-90" onClick={handleReset}>
            Reset
          </button>
          <p>{totalCount}</p>
        </div> :
        ""
      }
      <div className="flex flex-col gap-3">
        {counters.map((counter) => (
          <MyButton
            key={counter.id}
            onIncreament={() => handleIncreament(counter)}
            onDecreament={() => handleDecreament(counter)}
            onDelete={() => handleDelete(counter)}
            value={counter.value}
          />
        ))}
      </div>
    </div>
  );
}
