import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Solo se ejecuta al montarse el componente

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/home" element={<Navigate to="/" />} /> {/* Redirige a /home */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
