import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import Counters from "./Components/Counters";
import List from "./Pages/List";
import Game from "./Pages/Tic-tac-toe";
import Products from "./Components/Products";
import NaveBar from "./Components/NaveBar";
import "font-awesome/css/font-awesome.css";
import Movies from "./Pages/Movies";
import ProductsDetails from "./Components/ProductsDetails";
function App() {
  return (
    <div className="w-full">
      <NaveBar />
      <div className="flex flex-col w-full min-h-screen items-center justify-start">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
          <Route path="/counters" element={<Counters />} />
          <Route path="/list" element={<List />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/Searchproduct"  element={<Navigate to="/list" />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
