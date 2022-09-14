import React, { useContext, useState } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LoggedInContext from "./login-context";
import { StyledPaper, StyledAvatar } from "../../../styles/Login";

const INITAIL_VALUES = [{ email: "" }, { password: "" }];

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);
  const [enteredCredential, setEnteredCredential] = useState(INITAIL_VALUES);
  const [isEmailEntered, setIsEmailEntered] = useState(true);
  const [isPasswordEntered, setIsPasswordEntered] = useState(true);
  const [error, setError] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    !enteredCredential.email && setIsEmailEntered(false);
    !enteredCredential.password && setIsPasswordEntered(false);

    if (
      enteredCredential.email === "admin@gmail.com" &&
      enteredCredential.password === "admin@123"
    ) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "1");
    } else {
      setIsLoggedIn(false);
      setError(true);
    }
  };

  const inputChangeHandler = (event) => {
    if (event.target.name === "email") {
      setIsEmailEntered(true);
    }
    if (event.target.name === "password") {
      setIsPasswordEntered(true);
    }
    setError(false);
    setEnteredCredential({
      ...enteredCredential,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <React.Fragment>
      <StyledPaper>
        <Grid>
          {error && (
            <Typography variant="body1">Invalid credentials</Typography>
          )}
          <StyledAvatar>
            <PersonPinIcon />
          </StyledAvatar>
          <Typography variant="h4"> Sign In</Typography>
          <Typography variant="caption">Sign In</Typography>
        </Grid>
        <form onSubmit={loginHandler}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="filled"
            margin="normal"
            tyep="email"
            onChange={inputChangeHandler}
            name="email"
            value={enteredCredential.email}
            error={!isEmailEntered}
            helperText={!isEmailEntered ? "Email is required" : "Enter Email"}
          />
          <TextField
            id="passowrd"
            label="password"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            fullWidth
            margin="normal"
            onChange={inputChangeHandler}
            name="password"
            value={enteredCredential.password}
            error={!isPasswordEntered}
            helperText={
              !isPasswordEntered ? "Password is required" : "Enter password"
            }
          />

          <Button variant="contained" type="submit" sx={{ color: "primary" }}>
            Login
          </Button>
        </form>
      </StyledPaper>
    </React.Fragment>
  );
};
export default Login;
