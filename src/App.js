import "./App.css";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpenses from "./components/pages/Expenses/AddExpenses";
import AllExpenses from "./components/pages/Expenses/AllExpenses";
import EditExpenses from "./components/pages/Expenses/EditExpenses";
import SignUp from "./components/Login/SignUp";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import React, { useEffect, useState } from "react";
import LoggedInContext from "./components/Login/login-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { isLoggedIn, setIsLoggedIn };

  useEffect(() => {
    const isAlreadyLogin = localStorage.getItem("isLoggedIn");
    isAlreadyLogin === "1" && setIsLoggedIn(true);
  }, []);

  return (
    <div className="App">
      <LoggedInContext.Provider value={value}>
        <div>
          {!isLoggedIn ? (
            <Login />
          ) : (
            <>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route path="/contact" exact element={<Contact />} />
                  <Route exact path="/about" element={<About />}></Route>
                  <Route
                    exact
                    path="/add-expenses"
                    element={<AddExpenses />}
                  ></Route>
                  <Route
                    exact
                    path="/edit-expenses/:id"
                    element={<EditExpenses />}
                  ></Route>

                  <Route
                    exact
                    path="/all-expenses"
                    element={<AllExpenses />}
                  ></Route>
                  <Route exact path="/sign-up" element={<SignUp />}></Route>
                </Routes>
              </BrowserRouter>
            </>
          )}
        </div>
      </LoggedInContext.Provider>
    </div>
  );
}

export default App;
