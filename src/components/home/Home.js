// import React, { useRef, useState, useEffect, Fragment } from "react";
import PropertyCard from "../property/PropertyCard";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <PropertyCard
          imageurl="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
          title="property 1"
          description="description of the property1"
        />
        <PropertyCard
          imageurl="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
          title="property 2"
          description="description of the property2"
        />

        <PropertyCard
          imageurl="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
          title="property 2"
          description="description of the property2"
        />
        <PropertyCard
          imageurl="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
          title="property 2"
          description="description of the property2"
        />
        <PropertyCard
          imageurl="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
          title="property 2"
          description="description of the property2"
        />
      </div>
    </div>
  );
}

export default Home;
