import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Todolist from "./components/Todolist";
import TextBox from "./components/TextBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      {/* First Project */}
      <Router>
        <Navbar title="React App" home="Home" about="About Us" />
        <Routes>
          <Route path="/home" element={<Todolist />}></Route>
          <Route path="/about" element={<TextBox heading="Enter Text" />}></Route>
        </Routes>
      </Router>



      {/* Second Project */}
      {/* <Sidebar /> */}
    </>
  );
}

export default App;
