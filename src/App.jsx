import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Text from "./pages/Text";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Text" element={<Text />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
