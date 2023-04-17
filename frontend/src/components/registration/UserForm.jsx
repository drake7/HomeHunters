import React, { useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { setLogin, setUser, currentUser } from '../../store/login-store';
import axios from "axios";
import { apiEndpoint } from "../util/api";
const UserForm = () => {

  // Login store from care.io
  const dispatch = useDispatch()
  const user = useSelector(currentUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});


  // Aman's code
  const handleSubmit = async (event) => {
    event.preventDefault();    
      const response = await axios.post(`${apiEndpoint}/api/users/login`, {
        email: email,
        password: password
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)
      const {data} = response;
    
      if(data.user){
        console.log(data)
        dispatch(setUser(data.user))
      }else{
        setUser(null)
        alert("Unable to log in. Please check your credentials.")
      }
    

  };


  return (

    <div id="Login" className="hh-form-green">
      <form onSubmit={handleSubmit} >
        <div className="d-flex">
          <div className="fields mx-1">
            {/* <label className="form-label" htmlFor="email">Email</label> */}
            <input className="form-control input"
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              required={true}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="fields mx-1" >
            {/* <label className="form-label" htmlFor="password">Password</label> */}
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <div className="error" >{errors.password}</div>}
          </div>
          <button className="hh-btn-green mx-1" type="submit" onClick={handleSubmit} >
            Login
            <i className="fa fa-solid fa-circle-user"></i>
            </button>
        </div>
      </form> 
    </div> 

  );
};

export default UserForm;