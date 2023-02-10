import "./App.css";
//for routing
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import HomeBar from "./components/nav/HomeBar";

import Property from "./components/property/Property";

import React from 'react';
function App() {
  return (
    <div className="App">
      <HomeBar></HomeBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </div>
  );
}

export default App;
