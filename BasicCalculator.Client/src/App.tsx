import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import Counters from "./Components/Counters";
import List from "./Pages/List";
import Game from "./Pages/Tic-tac-toe";
import Products from "./Components/Thinking_in_React/Products";
import NaveBar from "./Components/NaveBar";
import 'font-awesome/css/font-awesome.css'
import Movies from "./Pages/Movies";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
        <NaveBar />
      <div className="flex flex-col w-full h-full items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
          <Route path="/counters" element={<Counters />} />
          <Route path="/list" element={<List />} />
          <Route path="/products" element={<Products />} />
          <Route path="/movies" element={<Movies />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
