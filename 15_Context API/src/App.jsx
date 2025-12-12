import React from "react";
import Navbar from "./components/Navbar.jsx";
import Button from "./components/Button.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeContext>
      <Navbar />
      <Button />
    </ThemeContext>
  );
};

export default App;
