import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, Container, Row, Col } from "react-bootstrap";

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
        <div className="prop-detail-card-group">
          <div className=" prop-detail-card-1">
            <h3>Location</h3>
            <h4>
              <i class="fa-solid fa-location-dot"></i> Wind st,Vancouver
            </h4>
            <h3>Description</h3>
            <p>
              Convenient location - 3 minutes walk to Metrotown Mall, 15 minutes
              walk to BCIT. 900 sq.ft large 1 bedroom + Den and large balcony on
              the top floor of a well maintained 3 level apartment building. Den
              room can be used as a small bedroom. Hardwood and tile floor
              throughout the suite. Additional storage. Heat and hot water
              included. 24/7 security camera onsite. Coin operated laundry in
              building. No pets and elevator in building, sorry. One-year lease
              and only individuals with good references need apply.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
