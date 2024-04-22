import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import NotesPage from "./pages/NotesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
