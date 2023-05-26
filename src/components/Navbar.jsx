// src/components/Navbar.js

import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { SessionContext } from "../contexts/SessionContexts";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user } = useContext(SessionContext);   // <== ADD

  
  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Link to="/login">
        <button>Login</button>
      </Link>
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;

