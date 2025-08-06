import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PokemonContextProvider from "./context/PokemonContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </BrowserRouter>
);
