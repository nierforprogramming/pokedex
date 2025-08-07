import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SIdebar/Sidebar";
import Favorites from "./pages/Favorites";
import Main from "./components/Main/Main";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="wrapper">
          <Sidebar />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:pokemonId" element={<PokemonDetails />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Main>
        </div>
      </div>
    </>
  );
}

export default App;
