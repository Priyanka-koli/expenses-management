import { useContext } from "react";
import { Button } from "@mui/material";
import LoggedInContext from "./login-context";

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };
  return (
    <>
      <Button
        sx={{ marginLeft: "auto" }}
        variant="contained"
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </>
  );
};

export default Logout;
