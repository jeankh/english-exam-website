import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import "./reset.css";
import "./App.css";
import { players } from "./data/data";
import Headers from "./components/Header";
import PlayerList from "./components/PlayerList";
import PlayerDetails from "./components/PlayerDetails";

function App() {
  const getPreferredTheme = () => {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const initialTheme = localStorage.getItem("theme") || getPreferredTheme();
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleClick = (player) => {
    setSelectedPlayer(player);
  };
  const handleBack = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className={`App ${theme}`}>
      <Headers theme={theme} onChangeTheme={toggleTheme} />
      {selectedPlayer ? (
        <PlayerDetails
          theme={theme}
          player={selectedPlayer}
          handleBackClick={handleBack}
        />
      ) : (
        <PlayerList theme={theme} players={players} handleClick={handleClick} />
      )}
    </div>
  );
}

export default App;
