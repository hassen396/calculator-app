import MyButton from "./Counter";
import { useState } from 'react';

export default function Counters(){
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return(
        <div className="flex gap-4">
        <MyButton  onClick={handleClick} />
        <MyButton  onClick={handleClick} />
        <p>{count}</p>
        </div>
    );
}