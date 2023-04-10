import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function PropertyContact(property) {

    // SENDINBLUE API KEY
    // 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

    async function sendEmail() {
        const to="macci.hello@gmail.com", subject="hello", htmlContent="test"
        alert("sending")
        const apiKey = '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';
    const url = 'https://api.sendinblue.com/v3/smtp/email';
  
    const data = {
      sender: { name: 'Your Name', email: 'hunter@homehunter.com' },
      to: [{ email: to }],
      subject: subject,
      htmlContent: htmlContent,
    };
  
    const headers = {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    };
  
    const res = await axios.post(url, data, { headers: headers });
    console.log({res})
  } 
  
//   function sendEmail(to, subject, htmlContent) {
//     const apiKey = 'YOUR_API_KEY';
//     const url = 'https://api.sendinblue.com/v3/smtp/email';
  
//     const data = {
//       sender: { name: 'Your Name', email: 'your-email@example.com' },
//       to: [{ email: to }],
//       subject: subject,
//       htmlContent: htmlContent,
//     };
  
//     const headers = {
//       'api-key': apiKey,
//       'Content-Type': 'application/json',
//     };
  
//     return axios.post(url, data, { headers: headers });
//   }


    return <div className="contact-detail-card rounded p-5">
    <h3 className="color-white">
      <i class="fa-regular fa-envelope"></i> Contact Landlord
    </h3>
    <div className="direction-column">
      <h5 className="color-light-green">LANDLORD</h5>

      <div className="direction-row">
        <img
          className="contact-image"
          src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
        ></img>
        <div className="user-detail">
          <h5 className="color-white">Aman Mishra</h5>
          <h6 className="color-white">+1 231-232-2232</h6>
          <h6 className="color-white">Aman.Mishra@gmail.com</h6>
        </div>
      </div>
      <h5 className="color-light-green">YOUR DETAILS</h5>

      <div className="direction-row">
        <img
          className="contact-image"
          src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
        ></img>
        <div className="user-detail">
          <h5 className="color-white">Deepak Kumar</h5>
          <h6 className="color-white">+1 231-232-2232</h6>
          <h6 className="color-white">Deepak.kumar@gmail.com</h6>
        </div>
      </div>

      <h5 className="color-light-green">YOUR MESSAGE</h5>
      <input
        className="input-message"
        type="text"
        placeholder="Hi Aman, I am interested in this property"
      ></input>

      <h5 className="color-light-green">BOOK A VIEWING DATE</h5>
      <input type="date" placeholder=""></input>
      <div className="direction-row" id="contactbtn">
        <input type="checkbox"></input>
        <p className="color-white" style={{margin:"auto"}}>
          Please agree to the terms and conditions.
        </p>
      </div>

      <button className="hh-btn-large hh-btn-green mt-4" id="send" name="send" onClick={sendEmail}>
        <span className="" >Send</span>
        <i class="fa-sharp fa-solid fa-paper-plane"></i>
      </button>
    </div>
  </div>

}


export default PropertyContact;