//for styling
import "./App.css";
import "./styles/typography.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//for routing
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import HomeBar from "./components/nav/HomeBar";

import Property from "./components/property/Property";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
function App() {
  return (
    <div className="App">
      <HomeBar></HomeBar>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Home />
            </div>
          }
        />

        <Route path="/property" element={<Property />} />
      </Routes>
    </div>
  );
}

export default App;
