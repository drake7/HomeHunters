//for styling
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css"
//for routing
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import HomeBar from "./components/nav/HomeBar";
import Property from "./components/property/Property";
import AddProperty from "./components/property/AddProperty";
import RegForm from "./components/registration/RegForm";
import UserForm from "./components/registration/UserForm";
import MyProperties from "./components/property/MyProperties";
import React, { useState } from "react";
// import React from "react";

import { useDispatch, useSelector} from 'react-redux';
import { setLogin, setUser, currentUser } from '../src/store/login-store';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(currentUser)
  // const user = useSelector(currentUser)
  console.log({user})


  return (
    <div className="App">
      <HomeBar
        user={user}
      ></HomeBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/register"  element={<RegForm/>} />
        <Route path="/login"  element={<UserForm/>} />
        { user ?<>
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/myProps"  element={<MyProperties/>} />
          </>
          : null
        }
        
        
      </Routes>
    </div>
  );
}

export default App;