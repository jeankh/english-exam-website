import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import "./reset.css";
import "./App.css";
import { pages } from "./data/data";

function App() {
  const getPreferredTheme = () => {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const initialTheme = localStorage.getItem("theme") || getPreferredTheme();
  const [theme, setTheme] = useState(initialTheme);

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  // };

  return (
    <div className={`App ${theme}`}>
      <h1>Hello !</h1>
      {/* <Header theme={theme} onChangeTheme={toggleTheme} pages={pages} /> */}
      {/* <Routes> */}
      {/* <Route
          path="/"
          element={
            <Home theme={theme} aboutMeData={aboutMeData} projects={projects} />
          }
        />
        <Route
          path="/about-me"
          element={<AboutMe theme={theme} aboutMeData={aboutMeData} />}
        />
        <Route
          path="/my-projects"
          element={<Projects theme={theme} projects={projects} />}
        /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
