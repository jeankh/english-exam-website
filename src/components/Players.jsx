import React from "react";
import dark from "../../assets/moon.svg";
import light from "../../assets/light.svg";

function Players({ theme, onChangeTheme }) {
  const themeIcon = {
    light: dark,
    dark: light,
  };
  return (
    <div>
      <h2>Players</h2>
      <p>Players List</p>
    </div>
  );
}

export default Players;
