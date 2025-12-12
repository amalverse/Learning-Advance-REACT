import React, { useContext } from "react";
import Nav2 from "./Nav2.jsx";
import { ThemeDataContext } from "../context/ThemeContext.jsx";

const Navbar = () => {
  // destructure theme from context value [theme, setTheme]
  const [theme] = useContext(ThemeDataContext);

  return (
    <div className={theme}>
      <h2>Amal</h2>
      <Nav2 />
    </div>
  );
};

export default Navbar;
