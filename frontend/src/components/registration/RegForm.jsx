import React, { useState } from "react";
import axios from "axios";
//import { useHistory } from 'react-router-dom';

const RegistrationForm = () => {

  //const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [photo, setPhoto] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted the form init:");

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    /*const formData = new FormData();
    console.log(email,password)
    formData.append("user_id",5);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("mobile", countryCode+contactNumber);
    formData.append("profile_photo", imageUrl);
    console.log(formData)*/
    const data = {
      user_id: 5,
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
      mobile: countryCode + contactNumber,
      profile_photo: imageUrl
    };
    
    try {
      if(data){
        const response = await axios.post("http://localhost:4000/api/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("User created :",response.data);
      handleReset()

      }
      
      //history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password is too short";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!firstName) {
      errors.firstName = "First name is required";
    }

    if (!lastName) {
      errors.lastName = "Last name is required";
    }

    if (!contactNumber) {
      errors.contactNumber = "Contact number is required";
    }

    if (!imageUrl) {
      errors.photo = "Photo is required";
    }

    return errors;
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setContactNumber("");
    setImageUrl(null);
    setErrors({});
  };

  const handlePhotoChange = (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append("upload_preset", "wjrbpbln");
    formData.append("cloud_name", "dwjrgaljd");

    axios.post('https://api.cloudinary.com/v1_1/dwjrgaljd/image/upload', formData)
      .then(response => {
        setImageUrl(response.data.secure_url);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
  <>
    <div className="header" ><h1>User Sign Up</h1></div>
    <div className="regForm">
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
          <div className="fields">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="fields">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
          </div>
          <div className="fields">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
        </div>

        <div className="fields">
          <label htmlFor="contactNumber">Contact Number</label>
          <div className="contactNo">
            <select
              id="countryCode"
              value={countryCode}
              onChange={(event) => setCountryCode(event.target.value)}
            >
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              <option value="+44">+44</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="number"
              id="contactNumber"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
            />
          </div>
          {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
        </div>

        <div className="imgBlock">
         
          <div className="imgRow">
            <div className="uploadImg">
            <p>Profile Photo </p>
              <label class="imgLabel" htmlFor="photo">
                <input type="file" 
                  required 
                  id="photo"
                  onChange={handlePhotoChange}/>
                Upload your photo
              </label>
            </div>
            <div className="userImg">
              {imageUrl  && (
                <img
                  src={imageUrl}
                  alt="Uploaded photo"
                />
              )}
            </div>
          </div>
          {errors.photo && <div className="error" style={{color:"red"}}>{errors.photo}</div>}
        </div>
        <div className="subDiv">
        <button type="submit" onClick={handleSubmit} className="submit">Sign me up</button></div>
      </form>
    </div>
    </>

  );
};

export default RegistrationForm;