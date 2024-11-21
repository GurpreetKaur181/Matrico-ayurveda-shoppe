import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Aboutpage from "./pages/Aboutpage/Aboutpage.jsx";
import Contactpage from "./pages/Contactpage/Contactpage.jsx";
import AyurStore from "./pages/AyurStore/AyurStore.jsx";
import DailyTips from "./pages/Daily_Tips/Daily_Tips.jsx";
import Loginpage from "./components/Auth/Login/Loginpage.jsx";
import SignupPage from "./components/Auth/Signup/SignupPage.jsx";
import Footer from "./components/footer/footer.jsx";
import { UserProvider } from "./utils/UserContext.jsx";
import Detailpage from "./pages/DetailPage/Detailpage.jsx";

function App() {
  return (
    <UserProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/ayur_store" element={<AyurStore />} />
          <Route path="/daily_tips" element={<DailyTips />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/detailpage" element={<Detailpage />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
