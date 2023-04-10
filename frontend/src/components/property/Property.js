import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {AiFillHome} from "react-icons/ai"; 
import {HiLocationMarker} from "react-icons/hi";
import {GiSofa} from "react-icons/gi";
import{TbRulerMeasure} from "react-icons/tb"
import PropertyContact  from "./PropertyContact";

function Property() {

    // get id from url
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  console.log(id);


  // fetch single property
  const [properties, setProperties] = useState([])
  const [property, setProperty] = useState(null)
  useEffect(() => { //should not make this upper funtion async coz of obvious reason
    
       const fetchProperties = async () => {
      //so making this on async
       const response =  await fetch(`http://localhost:4000/api/properties/${id}`) //This will output the response object, which includes properties such as status, statusText, headers, and body.
       const json = await response.json();  //parsing the response to an array of the data comming from the body
       
       if( response.ok){
          // setProperties(json)
          setProperty(json)
          console.log(json)  
       }
       
    }
    fetchProperties()
    console.log(properties)
  },[])

  function parseDate(move_in_date){
    const moveInDate = new Date(property.move_in_date);
    const formattedDate = moveInDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
   });

   

   return formattedDate;
  }

  function scrollToBottom() {
   const sendButton = document.getElementById('send');
 sendButton.scrollIntoView({ behavior: 'smooth' });
 }



  return (
    <>
    {property && 
      <div className="property">
        <nav></nav>

        <div className="top-details px-5">
          <div className="d-flex flex-column"> 
            <h5>
                <i class="fa-solid fa-house"></i>&nbsp;{property.category}&nbsp;&nbsp;<span className="color-gray"><i class="fa-solid fa-location-dot"/>&nbsp;
                  {property.length !== 0 ? property.address.city + ', ' + property.address.province : ''}
                  </span>
            </h5>
            <h2>{property.bedrooms} Beds, {property.bathrooms} Baths</h2>
            <h5 className="h5-gray">
              <span className="color-purple">${property.rent}</span> &nbsp;per month
            </h5>
          </div>

          <div>
            <button className="hh-btn-large"  onClick={scrollToBottom}>
              <span className="bg-color color-white">Contact landlord</span>
              <i class="fa-regular fa-envelope color-white"></i>
            </button>
          </div>
        </div>
        <div>
          <div className="property-gallery">
            <div class="gallery__holder">
              {
                property.imgs.map((img, i) => (
                  <div className="gallery-item"
                    style={{
                      backgroundImage: `url('${img}')` 
                    }}
                  >
                   </div> 
                  
                ))
              }

            </div>
            

          </div>
         
          <div className="all-cards">
            <div className="prop-detail-card-group">
              <div className=" prop-detail-card-1">
                <h3>Location</h3>
                <h4>
                  <i class="fa-solid fa-location-dot"></i> {property.address.street},{property.address.city}
                </h4>
                <h3>Description</h3>
                <p>
                  {property.desc}
                </p>
              </div>
              <div className=" prop-detail-card-2">
                <h3>Details</h3>
                <div className="prop-detail-card-2-row">
                  <div className="col-property-detail">
                    <h5>
                      <i class="fa-solid fa-bed detail-icon"></i>Bedroom
                    </h5>
                    <p>{property.bedrooms}</p>
                  </div>
                  <div className="col-property-detail">
                    <h5>
                      <i class="fa-solid fa-bath detail-icon"></i>Bathroom
                    </h5>
                    <p>{property.bathrooms}</p>
                  </div>
                </div>
                <div className="prop-detail-card-2-row">
                  <div className="col-property-detail">
                    <h5>
                    <i class="fas fa-couch"></i>&nbsp;Furnishing
                    </h5>
                    <p>{property.furnishing}</p>
                  </div>
                  <div className="col-property-detail">
                    <h5>
                    <i class="fa-solid fa-vector-square"></i>&nbsp;Carpet Area
                    </h5>
                    <p>{property.carpet_area} sqm</p>
                  </div>
                </div>
                <div className="prop-detail-card-2-row">
                  <div className="col-property-detail">
                    <h5>
                    <i className="fa-solid fa-truck"></i>&nbsp;MOVE-IN DATE
                    </h5>
                    <p>{parseDate(property.move_in_date)}</p>
                  </div>
                </div>
                <div className="prop-restriction-detail-group">
                  <div className="prop-restriction-detail">Has laundry</div>
                  <div className="prop-restriction-detail">No Smoking</div>
                  <div className="prop-restriction-detail">Has Parking</div>
                  <div className="prop-restriction-detail">Has Dishwasher</div>
                  <div className="prop-restriction-detail">Pet Friendly</div>
                </div>
                <h3>Lease Terms</h3>
                <p>{property.lease_terms}</p>
              </div>
            </div>

             <PropertyContact property={property}>
              </PropertyContact> 
            {/* <div className="contact-detail-card rounded p-5">
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

                <button className="hh-btn-large hh-btn-green mt-4" id="send" name="send">
                  <span className="" >Send</span>
                  <i class="fa-sharp fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    }
</>
  );
  
}

export default Property;
