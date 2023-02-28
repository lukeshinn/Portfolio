import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState([]);

  const setInitialTheme = (theme) => {
    document.body.classList.add(theme);
  };

  const setBodyClass = (theme) => {
    setTheme(theme);
    theme === "light"
      ? document.body.classList.replace("dark", theme)
      : document.body.classList.replace("light", theme);
  };

  useEffect(() => {
    setBodyClass("light");
    setInitialTheme("light");
  }, []);

  return (
    <button
      id="theme-toggle"
      //   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      onClick={() => setBodyClass(theme === "light" ? "dark" : "light")}
      onKeyDown={() =>
        e.keyCode === 13
          ? setBodyClass(theme === "light" ? "dark" : "light")
          : null
      }
    >
      {theme === "dark" ? (
        <BsSun />
      ) : theme === "light" ? (
        <BsFillMoonStarsFill />
      ) : (
        <BsFillMoonStarsFill />
      )}
    </button>
  );
};

export default ThemeToggle;
