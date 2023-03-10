import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

const PropertyCard = (props) => {
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        backgroundColor: "white",
        margin: "10px",
        boxShadow: "1px 1px 10px #ddd",
      }}
    >
      <img
        src={props.imageurl}
        style={{ width: "150px", height: "200px" }}
      ></img>
      <h3 style={{ padding: "10px" }}>{props.title}</h3>
      <p style={{ padding: "10px" }}>{props.description}</p>
    </div>
  );
};

export default PropertyCard;
