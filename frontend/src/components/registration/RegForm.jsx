import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [photo, setPhoto] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("contactDetails", contactDetails);
    formData.append("contactNumber", contactNumber);
    formData.append("countryCode", countryCode);
    formData.append("photo", photo);

    try {
      const response = await axios.post("/api/submit-form", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
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
      errors.password = "Password must be at least 8 characters";
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

    if (!contactDetails) {
      errors.contactDetails = "Contact details are required";
    }
    if (!contactNumber) {
      errors.contactNumber = "Contact number is required";
    }

    if (!photo) {
      errors.photo = "Photo is required";
    } else if (
      !["image/jpeg", "image/png", "image/gif"].includes(photo.type)
    ) {
      errors.photo = "Photo must be a JPEG, PNG, or GIF image";
    }

    return errors;
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setContactDetails("");
    setContactNumber("");
    setPhoto("");
    setErrors({});
  };


  return (
    <div className="regForm">
      <form onSubmit={handleSubmit}>
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
          <div className="fields">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
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
          Profile Photo
          <div className="imgRow">
            <div className="uploadImg">
              <label htmlFor="photo">Photo</label>
              <input
                type="file"
                id="photo"
                onChange={(event) => setPhoto(event.target.files[0])}
              />
            </div>
            <div className="userImg">
              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Uploaded"
                  style={{ width: "100%", marginTop: "1rem" }}
                />
              )}
            </div>
          </div>
          {errors.photo && <div className="error">{errors.photo}</div>}
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>

  );
};

export default RegistrationForm;