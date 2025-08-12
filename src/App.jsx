import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./pages/Favorites";
import PokemonDetails from "./pages/PokemonDetails";
import Types from "./pages/Types";
import NewsDetails from "./components/NewsCard/NewsDetails";
import SingleNews from "./components/NewsCard/SingleNews";

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Navbar />
          <div className="home-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:pokemonId" element={<PokemonDetails />} />
              <Route path="/favourites" element={<Favorites />} />
              <Route path="/types" element={<Types />} />
              <Route path="/news" element={<NewsDetails />} />
              <Route path="/news/:newsId" element={<SingleNews />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
