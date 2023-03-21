import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";

function Property() {
  return (
    <div className="property">
      <nav></nav>

      <div className="top-details">
        <div className="d-flex flex-column find-me">
          <h5>
            Independent House <span className="color-gray">Burnaby BC</span>
          </h5>
          <h2>3 Beds,1.5 Baths</h2>
          <h5 className="h5-gray">
            <span className="color-purple">$2800</span>per month
          </h5>
        </div>

        <div>
          <button className="contact-btn">Hi</button>
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
                <Col className="find-me col-property">
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
      </div>
    </div>
  );
}

export default Property;
