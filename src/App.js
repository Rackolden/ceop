import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact /> 
      </Routes>
      </Router>
    </>
  );
}

export default App;
