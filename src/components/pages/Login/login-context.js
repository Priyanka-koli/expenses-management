import React from "react";

// set the defaults
const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default LoggedInContext;
