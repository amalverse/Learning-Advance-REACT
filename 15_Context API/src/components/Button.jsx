import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext.jsx";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    // toggle between the string values 'light' and 'dark'
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Button;
