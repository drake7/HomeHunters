import React from "react";
const CTA = (props) => {
    return (
      
        <div className="cta-link">
            <h2>{props.title}</h2>
            <div>
                <button className="signup-btn">
                    <span className="text">{props.btnTxt}</span>
                </button>
            </div>
           <p>{props.dtl}</p>
        </div>
    
    );

}

export default CTA;