import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Tooltip from "./Tooltip";
import { Link } from "react-router-dom";
import {AiFillHome} from "react-icons/ai"; 
import {HiLocationMarker} from "react-icons/hi";
import { getCategoryNameById } from "../util/options";

function PtCard(props) {
  
  let propertyTypeString = getCategoryNameById(props.category);

  return (
    <>
      <Tippy content={<Tooltip {...props} />}
        arrow={true}
        delay={500}
        offset={[0, 20]}
        maxWidth='28rem'
        maxHeight='10rem'
        placement="right">
          <div>
        <Link to={`/property?id=${props.id}`} className="property-card">
          <img
            className="property-img"
            src={props.feature_img}
            alt="Property"
          />
          </Link>
          <div className="property-dts">
          <h5 className="location"> <span className='title'> <AiFillHome/> {propertyTypeString} </span>&nbsp;&nbsp;<HiLocationMarker/>{props.address.city}</h5>
            <h3 className="specs">{props.bedrooms} Beds, {props.bathrooms} Baths</h3>
            <h4 className="rent">${props.rent} per month</h4>
            {props.myProps && <div className="buttons"> 
              <button onClick={() => props.onDeleteProperty(props.id)}>Delete</button >
              <Link to={"/edit-property?id="+props.id}><button >Update</button></Link>
              
              </div>
            }
            
          </div>
          </div>
      </Tippy>
    </>
  );
}

export default PtCard;
