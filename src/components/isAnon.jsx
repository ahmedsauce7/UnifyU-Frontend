// src/components/IsAnon.js

import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContexts";
import { Navigate } from "react-router-dom";

function IsAnon({ children }) {
  const { isLoggedIn, isLoading } = useContext(SessionContext);
  // If the user is logged in, navigate to the home page
  if (isLoggedIn && isLoading) {
    return <Navigate to="/" />;
  }
  // If the authentication is still loading
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  // If the user is not logged in, allow them to see the page
  return children;
}

export default IsAnon;

