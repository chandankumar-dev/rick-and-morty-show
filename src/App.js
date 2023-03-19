import "./App.css";
import CharactersList from "./pages/characterList/CharactersList";
import { Routes, Route } from "react-router";
import Character from "./pages/character/Character";
import Search from "./pages/searchComponent/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/search" element={<Search />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
