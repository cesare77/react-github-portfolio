// import { useState } from "react";
import logo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo={logo}/>
      <Routes>
        <Route 
          path="/"
          element={<Profile userName="cesare77" />}
        />
        <Route 
          path="projects"
          element={<Projects userName="cesare77"/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
