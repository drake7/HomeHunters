import React from 'react';
import {AiFillHome} from "react-icons/ai"; 
import {HiLocationMarker} from "react-icons/hi";
const Tooltip = (props) => {
    return ( 
        <div className="tooltip-content" style={{padding:"10px", paddingTop:"20px"}}>

            <div className='loc'>
            <h6><span className='title'> <AiFillHome/> {props.title} </span><HiLocationMarker/> {props.locality}, {props.city}, {props.province}</h6>
            </div>
            <h3>{props.specs}</h3>
            <h4><span className='money'>${props.rent}</span> per month</h4>
            <p>{props.owner}</p>
            <p>{props.furniture}</p>
            <p>{props.dts}</p>
            
        </div>
    );
}
 
export default Tooltip;