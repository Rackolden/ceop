import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Body from "./Components/Body";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
