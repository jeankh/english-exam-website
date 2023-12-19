import React from "react";
import dark from "../assets/moon.svg";
import light from "../assets/light.svg";
import "./header.css";

function Header({ theme, onChangeTheme }) {
  const themeIcon = {
    light: dark,
    dark: light,
  };
  return (
    <nav className="Header">
      <h1 className="title">M2 Team</h1>
      <button onClick={() => onChangeTheme()}>
        <img
          src={themeIcon[theme]}
          alt={`${theme} img`}
          aria-label={`${theme} img`}
        />
      </button>
    </nav>
  );
}

export default Header;
