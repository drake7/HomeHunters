import React from "react";
import { Link } from "react-router-dom";
const CTA = (props) => {
    return (
      
        <div className="cta-link">
            <h2>{props.title}</h2>
            <div>
            <Link to={props.link} className="reg-link">
                <button className="signup-btn">
                    <span className="text">{props.btnTxt}</span>
                </button>
                </Link>
            </div>
           <p>{props.dtl}</p>
        </div>
    
    );

}

export default CTA;