import "./App.css";
import CharactersList from "./pages/characterList/CharactersList";
import { Routes, Route } from "react-router";
import Character from "./pages/character/Character";
import Search from "./pages/searchComponent/Search";

function App() {
  return (
    <div className="App">
      <header className="bg-cyan-500 shadow mb-5">
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center">
          <Search />
        </div>
      </header>
      <div className="p-5">
        <Routes>
          <Route strict exact path="/" element={<CharactersList />} />
          <Route strict exact path="/:id" element={<Character />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
