import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import UserForm from "../registration/UserForm";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { setUser, currentUser } from '../../store/login-store';
 

//added this for bootstrap support
// import "bootstrap/dist/css/bootstrap.css"; // i moved this to App.js so everyone can get bootstrap support

function HomeBar(props) {
  const dispatch = useDispatch()
  const user = useSelector(currentUser);
  const logout = () =>{
    dispatch(setUser(null))
  }

  return (
    <>
      <nav class="hh-navbar navbar navbar-expand-lg navbar-light bg-light">
        <Link 
          to="/" style={{paddingLeft:"2rem",textDecoration:"none"}}
          className="brand d-flex align-items-center m-1"
        >
          <div class="d-flex align-items-center px-4">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 10.7572C0.75 10.0333 1.14118 9.36594 1.77279 9.01224L15.7728 1.17224C16.3799 0.832252 17.1201 0.832252 17.7272 1.17224L31.7272 9.01224C32.3588 9.36594 32.75 10.0333 32.75 10.7572V30.625C32.75 31.7296 31.8546 32.625 30.75 32.625H2.75C1.64543 32.625 0.75 31.7296 0.75 30.625V10.7572Z" fill="#6663E8"/>
              <circle cx="16.75" cy="18.225" r="9.1" fill="white" stroke="white"/>
              <circle cx="16.75" cy="18.2248" r="4.3" fill="#6663E8" stroke="#6663E8"/>
            </svg>
            <span class="navbar-brand m-2 color-purple">
                HomeHunter
            </span>
          </div>
        </Link>

        <div>
          {
            user ?
              <span class="color-dark">Welcome, {user && user.firstname}</span>
              : null
          }

        </div>

        <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        { user ?
          <>
            <li class="nav-item text-center mx-2 mx-lg-1">
              <Link to="add-property" class="nav-link">
                Add a property
              </Link>
            </li>
            <li class="nav-item text-center mx-2 mx-lg-1">
              <button class="nav-link" onClick={logout} href="#!">
                Logout
              </button>
            </li>
          </>
          :
          <>
          <UserForm></UserForm>
          </>
        }
        </ul>
        
      </nav>
    </>
  );
}

export default HomeBar;
