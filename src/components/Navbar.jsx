// src/components/Navbar.js

import { NavLink } from "react-router-dom";

import { useContext } from "react"; // <== ADD
import { ThemeContext } from "./../context/theme.context"; // <== ADD

function Navbar() {
  const value = useContext(ThemeContext); // <== ADD

  return (
    <nav className={"Navbar " + value}>    {/* <== UPDATE  */}
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
