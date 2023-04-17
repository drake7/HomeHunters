import React from 'react';
import {AiFillHome} from "react-icons/ai"; 
import {HiLocationMarker} from "react-icons/hi";
import {GiSofa} from "react-icons/gi";
import{TbRulerMeasure} from "react-icons/tb"
import styled from 'styled-components';
import { getCategoryNameById } from "../util/options";


const Tooltip = (props) => {
    const catName = getCategoryNameById(props.category);
    return ( 
        <div className="tooltip-content" style={{padding:"10px", paddingTop:"20px"}}>

            <div className='loc'>
            <h6><span className='title'> <AiFillHome/>&nbsp;{catName} </span><HiLocationMarker/>&nbsp;{props.address.street}, {props.address.city}, {props.address.province}</h6>
            </div>
            <h3>{props.bedrooms} Beds, {props.bathrooms} Baths</h3>
            <h4><span className='money'>${props.rent}</span> per month</h4>
            {/* <h6>Owner Id : {props.landlord_user_id}</h6> */}
            <h6><span className='title'> <GiSofa/> &nbsp;{props.furnishing} </span><TbRulerMeasure/>&nbsp;{props.carpet_area}</h6>
             <p>{props.desc}</p>    
        </div>
    );
}
 
export default Tooltip;