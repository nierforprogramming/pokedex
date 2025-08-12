import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./pages/Favorites";
import PokemonDetails from "./pages/PokemonDetails";
import Types from "./pages/Types";

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:pokemonId" element={<PokemonDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/types" element={<Types />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
