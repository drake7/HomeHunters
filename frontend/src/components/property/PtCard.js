import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Tooltip from "./Tooltip";

function PtCard(props) {
  return (
    <>
      <Tippy content={<Tooltip {...props} />}
        arrow={true}
        delay={500}
        offset={[0, 20]}
        maxWidth='28rem'
        maxHeight='10rem'
        placement="right">
        <Link to="/property" className="property-card">
          <img
            className="property-img"
            src={props.image}
            alt="Property"
          />
          <div className="property-dts">
            <h5 className="location">{props.title}</h5>
            <h3 className="specs">{props.specs}</h3>
            <h4 className="rent">${props.rent} per month</h4>
          </div>
        </Link>
      </Tippy>
    </>
  );
}

export default PtCard;
