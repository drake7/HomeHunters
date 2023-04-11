// import React, { useRef, useState, useEffect, Fragment } from "react";
import Header from "./Header";
import PtContainer from "../property/PtContainer";
import CTA from "./CTA";
import {  useSelector} from 'react-redux';
import {  currentUser } from '../../store/login-store';

function Home() {
  // const dispatch = useDispatch()
  const user = useSelector(currentUser);
  
  return (
    <div className="home">
      <div>
        <Header />
        <PtContainer />
          { user ? null:
          <CTA title="Register to see more properties"
            link="/register"
            btnTxt="Sign up"
            dtl="Registering as a user lets you see all the properties and contact the landlords for viewing. IT’S FREE!" />
           }
      </div>
    </div>
  );
}

export default Home;
