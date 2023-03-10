
//for styling
// import "./App.css";
import "./styles/typography.css"

import "./styles/home.css";
//for routing
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import HomeBar from "./components/nav/HomeBar";
import Ptcontainer  from "./components/property/PtContainer";

import React from "react";
function App() {
  return (
    <div className="App">
      <HomeBar></HomeBar>
      {/*<Routes>
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
            </div>
          }
        />
        </Routes> */}
      <Home />
    </div>
  );
}

export default App;
