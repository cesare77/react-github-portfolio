// import { useState } from "react";
import logo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Search from "./pages/Search";


function App() {
  const [userName, setUserName] = useState("cesare77");

  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="search" element={<Search userName={userName} setUserName={setUserName} />} />
          <Route path="/" element={<Profile userName={userName} />} />
          <Route path="projects" element={<Projects userName={userName} />} />
          <Route
            path="/projects/:name"
            element={<Project userName={userName} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
