import React from "react";
import PlayerItem from "./PlayerItem.jsx";
import "./playerList.css";

const PlayerList = ({ theme, players, handleClick }) => {
  return (
    <div className={`player-list ${theme}`}>
      {players.map((player, index) => (
        <PlayerItem key={index} player={player} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default PlayerList;
