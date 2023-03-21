import React from "react";

function PtCard(props) {
  return (
    <div className="property-card">
      <img
        className="property-img"
        src={props.image}
        alt="Property"
      />

      <div className="property-dts">
        <h5 className="location">{props.title}</h5>
        <h3 className="specs">{props.specs}</h3>
        <h4 className="rent">{props.rent}</h4>
      </div>
    </div>
  );
}

export default PtCard;
