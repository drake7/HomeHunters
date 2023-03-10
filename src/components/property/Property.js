import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Row, Col } from 'react-bootstrap';



function Property() {

  const cardStyle = {
    height: '400px',
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const cardBodyStyle = {
    flex: '1 1 auto' // make the card body expand to fill available space
  };

  const rowStyle = {
    flex: '1 1 33% auto', // make the row expand to fill available space
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  };

  const colStyle = {
    flex: '1 1 25%', // divide the available space equally among four columns
    margin: '5px' // add a small margin between the columns
  };

  return (
    <div className="Property">
      <nav></nav>
      
      <div className='textnpm-left width-auto'> 
        <h4>Independent House <span className="color-gray">Burnaby BC</span></h4>
        <h2>3 Beds,1.5 Baths</h2>
        <h3><span className="color-purple">$2800 </span>per month</h3>
      </div>
      <div>
      <Container>
        <Row>
          <Col>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" />
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <Row style={rowStyle}>
                <Col style={colStyle}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" />
                </Col>
                <Col style={colStyle}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" />
                </Col>
                <Col style={colStyle}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" />
                </Col>
                <Col style={colStyle}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" />
                </Col>
              </Row>
            </Card>
          </Col>
          
          <Col>
            <Card style={cardStyle}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default Property;
