import React, { useState } from 'react';
import CTA from './CTA';
import {  useSelector} from 'react-redux';
import {  currentUser } from '../../store/login-store';

const Header = () => {
    const user = useSelector(currentUser);

    return (<div className="header-home">
        <div className="slogan"><h1>Discover your <span className="highlight">perfect space</span><br />in your area hassle free </h1></div>
        {user ? <CTA title="List your property"
            btnTxt="Start Posting"
            dtl="As a landlord, you can get your properties promoted to a wider audience" /> : null}
    </div>);
}

export default Header;