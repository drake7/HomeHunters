// import React, { useRef, useState, useEffect, Fragment } from "react";
import Header from "./Header";
import PtContainer from "../property/PtContainer";
import CTA from "./CTA";
function Home() {
  const isloggedIn = false;
  return (
    <div className="home">
      <div>
        <Header />
        <PtContainer />
        {isloggedIn ? null:<CTA title="Register to see more properties"
          btnTxt="Sign up"
          dtl="Registering as a user lets you see all the properties and contact the landlords for viewing. IT’S FREE!" /> }
      </div>
    </div>
  );
}

export default Home;
