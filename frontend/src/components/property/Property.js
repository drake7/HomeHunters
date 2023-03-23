import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Property() {
  return (
    <div className="property">
      <nav></nav>

      <div className="top-details">
        <div className="d-flex flex-column">
          <h5>
            Independent House <span className="color-gray">Burnaby BC</span>
          </h5>
          <h2>3 Beds,1.5 Baths</h2>
          <h5 className="h5-gray">
            <span className="color-purple">$2800</span>per month
          </h5>
        </div>

        <div>
          <button className="contact-btn">
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
                  src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                />
              </Card>
            </Col>
            <Col className="img-4x">
              {/* <Card className="card"> */}
              <Row className="row-property">
                <Col className="col-property">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                  />
                </Col>
                <Col className="col-property">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                  />
                </Col>
              </Row>
              <Row className="row-property">
                <Col className="col-property">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                  />
                </Col>
                <Col className="col-property">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                  />
                </Col>
              </Row>
              {/* </Card> */}
            </Col>
            <Col className="img-1x">
              <Card className="card">
                <Card.Img
                  variant="top"
                  src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
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
                <i class="fa-solid fa-location-dot"></i> Wind st,Vancouver
              </h4>
              <h3>Description</h3>
              <p>
                Convenient location - 3 minutes walk to Metrotown Mall, 15
                minutes walk to BCIT. 900 sq.ft large 1 bedroom + Den and large
                balcony on the top floor of a well maintained 3 level apartment
                building. Den room can be used as a small bedroom. Hardwood and
                tile floor throughout the suite. Additional storage. Heat and
                hot water included. 24/7 security camera onsite. Coin operated
                laundry in building. No pets and elevator in building, sorry.
                One-year lease and only individuals with good references need
                apply.
              </p>
            </div>
            <div className=" prop-detail-card-2">
              <h3>Details</h3>
              <div className="prop-detail-card-2-row">
                <div className="col-property-detail">
                  <h5>
                    <i class="fa-solid fa-bed detail-icon"></i>Bedroom
                  </h5>
                  <p>3</p>
                </div>
                <div className="col-property-detail">
                  <h5>
                    <i class="fa-solid fa-bath detail-icon"></i>Bathroom
                  </h5>
                  <p>2</p>
                </div>
              </div>
              <div className="prop-detail-card-2-row">
                <div className="col-property-detail">
                  <h5>
                    <i class="fa-solid fa-bed detail-icon"></i>Furnishing
                  </h5>
                  <p>Semi-furnished</p>
                </div>
                <div className="col-property-detail">
                  <h5>
                    <i class="fa-solid fa-bath detail-icon"></i>Carpet Area
                  </h5>
                  <p>2,400 sqm</p>
                </div>
              </div>
              <div className="prop-detail-card-2-row">
                <div className="col-property-detail">
                  <h5>
                    <i class="fa-solid fa-bed detail-icon"></i>MOVE-IN-DATE
                  </h5>
                  <p>June 04,2024</p>
                </div>
              </div>
              <div className="prop-restriction-detail-group">
                <div className="prop-restriction-detail">Has laundry</div>
                <div className="prop-restriction-detail">No Smoking</div>
                <div className="prop-restriction-detail">Has Parking</div>
                <div className="prop-restriction-detail">Has Dishwasher</div>
                <div className="prop-restriction-detail">Pet Friendly</div>
              </div>
              <h3>Lease Term</h3>
              <p>Minimum 1 year lease. Monthly rolling lease.</p>
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
              <div className="direction-row">
                <input type="checkbox"></input>
                <p className="color-white">
                  Please agree to the terms and conditions.
                </p>
              </div>

              <button className="message-btn">
                <span className="bg-color color-white">Send</span>
                <i class="fa-sharp fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
