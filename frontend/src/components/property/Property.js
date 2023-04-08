import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useState,useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {AiFillHome} from "react-icons/ai"; 
import {HiLocationMarker} from "react-icons/hi";
import {GiSofa} from "react-icons/gi";
import{TbRulerMeasure} from "react-icons/tb"

function Property() {
    
    // fetch single property
        const [property, setProperty] = useState([])
        useEffect(() => { //should not make this upper funtion async coz of obvious reason
  
        
         const fetchProperty = async () => {
          // get id from url
          const queryString = window.location.search;
          console.log(queryString);
          const urlParams = new URLSearchParams(queryString);
          const id = urlParams.get('id')
          console.log(id);

        //so making this on async
         const response =  await fetch(`http://localhost:4000/api/properties/${id}`) //This will output the response object, which includes properties such as status, statusText, headers, and body.
         const json = await response.json();  //parsing the response to an array of the data comming from the body
  
         if( response.ok){
            setProperty(json)
            console.log(json)  
         }  
      }
      fetchProperty()
      
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
    {property.length !== 0 && 
    <div className="property">
      <nav></nav>

      <div className="top-details">
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
          <button className="contact-btn"  onClick={scrollToBottom}>
            <span className="bg-color color-white">Contact landlord</span>
            <i class="fa-regular fa-envelope color-white"></i>
          </button>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col className="img-1x">
              <Card className="card">
                 <Card.Img
                  variant="top"
                  src={property.imgs[0]}
                />
              </Card>
            </Col>
            <Col className="img-4x">
              {/* <Card className="card"> */}
              <Row className="row-property">
                <Col className="col-property">
                  <Card.Img
                    variant="top"
                    src={property.imgs[1]}
                  />
                </Col>
                <Col className="col-property">
                  <Card.Img
                    variant="top"
                    src={property.imgs[2]}
                  />
                </Col>
              </Row>
              <Row className="row-property">
                <Col className="col-property">
                  <Card.Img
                    variant="top"
                    src={property.imgs[3]}
                  />
                </Col>
                <Col className="col-property">
                  <Card.Img
                    variant="top"
                    src={property.imgs[4]}
                  />
                </Col>
              </Row>
              {/* </Card> */}
            </Col>
            <Col className="img-1x">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={property.imgs[5]}
                />
              </Card>
            </Col>
          </Row>
        </Container>
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
          <div className="contact-detail-card">
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

              <button className="message-btn" id="send" name="send">
                <span className="bg-color color-white" >Send</span>
                <i class="fa-sharp fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
}
</>
  );
  
}

export default Property;
