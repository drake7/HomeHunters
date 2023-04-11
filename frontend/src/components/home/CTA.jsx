import React from "react";
import { Link } from "react-router-dom";
const CTA = (props) => {
    return (
      
        <div className="cta-link">
            <h2 className="mb-4">{props.title}</h2>
            <div>
            <Link to={props.link} className="reg-link">
                <button className="hh-btn-large px-5">
                    <span className="text">{props.btnTxt}</span>
                    <i className="fa fa-solid fa-circle-user"></i>
                </button>
                </Link>
            </div>
           <p>{props.dtl}</p>
        </div>
    
    );

}

export default CTA;