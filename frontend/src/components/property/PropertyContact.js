import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {  currentUser } from '../../store/login-store';
import {  useSelector} from 'react-redux';

function PropertyContact({property, landlordId}) {

  const user = useSelector(currentUser);

  const [msg, setMsg] = useState("");
  const [moveDate, setMoveDate] = useState(parseDate(property.move_in_date));
  const [check, setCheck] = useState(false);

  // axios.get(`http://localhost:4000/api/users/${property.landlord_user_id}`)
  //     .then((res)=>{
  //       console.log(res)
  //       setLandlord(res.data)
  //     })
  // const _landlord = await getLandlord(property.landlord_user_id);
  const [landlord, setLandlord] = useState(null);

    // SENDINBLUE API KEY
    // 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
    async function sendEmail() {
        const to="macci.hello@gmail.com" 
        const subject=`Interest in ${property.address.street} from ${currentUser.firstname}`;
        const htmlContent = msg + `<br/> From: ${currentUser.firstname} ${currentUser.lastname} 
        - ${currentUser.mobile} / ${currentUser.email}`;
        
        const apiKey = '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';
        const url = 'https://api.sendinblue.com/v3/smtp/email';
  
    const data = {
      sender: { name: `HomeHunter: ${currentUser.firstname} ${currentUser.lastname}`, email: 'hunter@homehunter.com' },
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

  function parseDate(date) {
    const moveInDate = new Date(date);
    const year = moveInDate.getFullYear();
    const month = moveInDate.getMonth() + 1 < 10 ? '0' + (moveInDate.getMonth() + 1) : moveInDate.getMonth() + 1;
    const day = moveInDate.getDate() < 10 ? '0' + moveInDate.getDate() : moveInDate.getDate();
    return `${year}-${month}-${day}`;
  }

  async function getLandlord(_id){
    const response = await axios.get(`http://localhost:4000/api/users/${_id}`)
    console.log(response)
    return response.data

  }
  // axios.get(`http://localhost:4000/api/users/${property.landlord_user_id}`)
  //     .then((res)=>{
  //       console.log(res)
  //       setLandlord(res.data)
  //     })

  useEffect(()=>{
    if(!landlord){
      axios.get(`http://localhost:4000/api/users/${property.landlord_user_id}`)
      .then((res)=>{
        console.log(res)
        setLandlord(res.data)
      })
    }
    
  })



    return <div className="contact-detail-card rounded p-4 text-white">
    <h3 className="color-white mb-4">
      <i class="fa-regular fa-envelope"></i> &nbsp; Contact Landlord
    </h3>
    <div className="direction-column">
      <div class="your details mb-4">
        <h5 className="color-light-green mb-2">Your Details</h5>

        <div className="direction-row">
          <img
            className="contact-image"
            src="https://source.unsplash.com/random/640x480?query=student"
          ></img>
          <div className="user-detail">
            <h5 className="color-white">{user.firstname} {user.lastname}</h5>
            <h6 className="color-white">{user.mobile}</h6>
            <h6 className="color-white">{user.email}</h6>
          </div>
        </div>
      </div>
      
      {landlord && <div class="landlord d-block mb-4">
        <h5 className="color-light-green">Landlord</h5>

        <div className="direction-row">
          <img
            className="contact-image"
            src="https://source.unsplash.com/random/640x480?query=adult"
          ></img>
          <div className="user-detail">
            <h5 className="color-white">{landlord.firstname} {landlord.lastname}</h5>
            <h6 className="color-white">{landlord.mobile}</h6>
            <h6 className="color-white">{landlord.email}</h6>
          </div>
        </div>
      </div>}
      <br/>

      <div class="message hh-form mb-3 mt-2">
        <h5 className="color-light-green">Your message</h5>
        <textarea
          className="input-message form-control w-100"
          type="text"
          placeholder="Hi Aman, I am interested in this property"
          onChange={(event) => setMsg(event.target.value)}
        ></textarea>
      </div>

      <div class="date hh-form mb-3">

        <h5 className="color-light-green">Preferred viewing date</h5>
        <input 
          type="date"
          className="form-control" 
          value={moveDate}
          onChange={(event) => setMoveDate(event.target.value)}
        ></input>
      </div>
      <div className="send hh-form mt-4">
        <div className="direction-row px-2" id="contactbtn">
          <input className="rounded" type="checkbox"></input>
          <p className="color-white" style={{margin:"auto"}}>
            Please agree to the terms and conditions.
          </p>
        </div>

        <button className="hh-btn-large hh-btn-green mt-1 w-100" id="send" name="send" onClick={sendEmail}>
          <span className="" >Send</span>
          <i class="fa-sharp fa-solid fa-paper-plane"></i>
        </button>
       </div> 
    </div>
  </div>

}


export default PropertyContact;