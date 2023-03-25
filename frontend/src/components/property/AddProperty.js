import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddProperty() {
  return (
    <div className="property">
      <div className="direction-column">
        <div className="direction-row">
          <h1 className="top-details">YOUR PROPERTY FOR RENT</h1>{" "}
          <button className="contact-btn">
            <span className="bg-color color-white">Post your property</span>
            <i class="fa-regular fa-envelope color-white"></i>
          </button>
        </div>
        <h5>
          Here you can easily upload your rental property and make it available
          to the others to rent.
        </h5>
      </div>
    </div>
  );
}

export default AddProperty;
