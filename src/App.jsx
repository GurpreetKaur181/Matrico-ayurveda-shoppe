import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import DailyTips from "./pages/Daily_Tips/Daily_Tips.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/daily_tips" element={<DailyTips />} />
      </Routes>
    </Router>
  );
}

export default App;
