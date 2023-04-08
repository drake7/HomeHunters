import React, { useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { setLogin, setUser, currentUser } from '../../store/login-store';
import axios from "axios";

const UserForm = () => {

  // Login store from care.io
  const dispatch = useDispatch()
  const [loginMeta, setLoginMeta] = useState({
      email: 'hello@partners.com',
      password: 'password'
  });
  const user = useSelector(currentUser)
  // console.log({user})

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});


  // Aman's code
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors);
    //   return;
    // }

    try {
      const response = await axios.post("http://localhost:4000/api/users/login", {
        email: "julia@gmail.com",
        password: "pass1234"
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      const {data} = response;
      if(data.user){
        dispatch(setUser({
          ...user,
        }))
        dispatch(setLogin(true))
      }else{
        dispatch(setUser({
        }))
        dispatch(setLogin(false))
      }
    } catch (error) {
      console.error(error);
    }

  };

  const validateForm = () => {
      const errors = {};

      // if (!email) {
      //   errors.email = "Email is required";
      // } else if (!/\S+@\S+\.\S+/.test(email)) {
      //   errors.email = "Email is invalid";
      // }

      // if (!password) {
      //   errors.password = "Password is required";
      // } else if (password.length < 8) {
      //   errors.password = "Password must be at least 8 characters";
      // }

      // if (password !== confirmPassword) {
      //   errors.confirmPassword = "Passwords do not match";
      // }

      // if (!firstName) {
      //   errors.firstName = "First name is required";
      // }

      // if (!lastName) {
      //   errors.lastName = "Last name is required";
      // }

      // if (!contactDetails) {
      //   errors.contactDetails = "Contact details are required";
      // }
      // if (!contactNumber) {
      //   errors.contactNumber = "Contact number is required";
      // }

      // if (!photo) {
      //   errors.photo = "Photo is required";
      // } else if (
      //   !["image/jpeg", "image/png", "image/gif"].includes(photo.type)
      // ) {
      //   errors.photo = "Photo must be a JPEG, PNG, or GIF image";
      // }

      return errors;
  };



  



  return (

    <div id="Login" class="hh-bg-light">
      <div className="header" >
        <h1>Login</h1>
      </div>
      <div className="regForm p-5 h-100">
      <form onSubmit={handleSubmit} >
        <div className="fields">
          <label htmlFor="email">Email</label>
          <input className="input"
            type="email"
            id="email"
            value={email}
            required={true}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="row">
          <div className="fields" >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <div className="error" >{errors.password}</div>}
          </div>
        </div>

        <div className="subDiv">
        <button type="submit" onClick={handleSubmit} className="submit">Login</button></div>
      </form>
      </div> 
    </div> 

  );
};

export default UserForm;