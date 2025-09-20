// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Pages/Home";
// import Counter from "./Components/Counter";
import Counters from "./Components/Counters";
import List from "./Pages/List";
import Game from "./Pages/Tic-tac-toe";
import Products from "./Components/Thinking_in_React/Products";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element= {<Game />}/>
        <Route path="/counters" element = { <Counters/>}/>
        <Route path="/list" element = { <List/>}/>
        <Route path="/products" element = { <Products/>}/>
      </Routes>
    </Router>
  );
}

export default App;
