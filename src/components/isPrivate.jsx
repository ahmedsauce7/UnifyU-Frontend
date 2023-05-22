// src/components/IsPrivate.js
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContexts";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(SessionContext);
   // If the user is not logged in
   console.log(isLoading)
  if (!isLoggedIn && !isLoading) {
    return <Navigate to="/login" />;
  }
  // If the authentication is still loading
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  // If the user is logged in, allow them to see the page
  return children;
}

export default IsPrivate;
