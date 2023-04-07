//for styling
import "bootstrap/dist/css/bootstrap.css";
import "./styles/app.css"
//for routing
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import HomeBar from "./components/nav/HomeBar";
import Property from "./components/property/Property";
import AddProperty from "./components/property/AddProperty";
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
                
              }}
            >
              <Home />
            </div>
          }
        />

        <Route path="/property" element={<Property />} />
        
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;