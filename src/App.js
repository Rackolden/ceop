import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirige a /home */}
          <Route path="/home" element={<Body />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
