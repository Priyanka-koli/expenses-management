import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpenses from "./components/pages/AddExpenses";
import AllExpenses from "./components/pages/AllExpenses";
import SignUp from "./components/Login/SignUp";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" exact element={<Contact />} />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/add-expenses" element={<AddExpenses />}></Route>
          <Route exact path="/all-expenses" element={<AllExpenses />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
