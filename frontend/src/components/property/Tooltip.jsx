import React from 'react';
import {AiFillHome} from "react-icons/ai"; 
import {HiLocationMarker} from "react-icons/hi";
const Tooltip = (props) => {
    return ( 
        <div className="tooltip-content" style={{padding:"10px", paddingTop:"20px"}}>

            <div className='loc'>
            <h6><span className='title'> <AiFillHome/> {props.category} </span><HiLocationMarker/> {props.address.street}, {props.address.city}, {props.address.province}</h6>
            </div>
            <h3>{props.bedrooms} Beds, {props.bathrooms} Baths</h3>
            <h4><span className='money'>${props.rent}</span> per month</h4>
            <h6>Owner Id : {props.landlord_user_id}</h6>
            <h6><span className='title'> <AiFillHome/> {props.furnishing} </span><HiLocationMarker/> {props.carpet_area}</h6>
            
        </div>
    );
}
 
export default Tooltip;