import React, { useState } from 'react';
import CTA from './CTA';
const Header = () => {
    const isLoggedIn = true;

    return (<div className="header-home">
        <div className="slogan"><h1>Discover your <span className="highlight">perfect space</span><br />in your area hassle free </h1></div>
        {isLoggedIn ? <CTA title="List your property"
            btnTxt="Start Posting"
            dtl="As a landlord, you can get your properties promoted to a wider audience" /> : null}
    </div>);
}

export default Header;