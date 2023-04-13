import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import PropertyContact from "./PropertyContact";

import { currentUser } from "../../store/login-store";
import { useSelector } from "react-redux";
import Maps from "../util/Maps";
import { getCategoryNameById, getTagNameById, propertyTags } from "../util/options";

function Property() {
  const user = useSelector(currentUser);
  // get id from url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const allTags = propertyTags;
  const getTag = getTagNameById;


  // fetch single property
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState(null);
  const [category, setCategory] = useState("")
  useEffect(() => {
    //should not make this upper funtion async coz of obvious reason

    const fetchProperties = async () => {
      //so making this on async
      const response = await fetch(
        `http://localhost:4000/api/properties/${id}`
      ); //This will output the response object, which includes properties such as status, statusText, headers, and body.
      const json = await response.json(); //parsing the response to an array of the data comming from the body

      if (response.ok) {
        // setProperties(json)
        setProperty(json);

        setCategory(getCategoryNameById(json.category))
        console.log(json);
      }
    };
    fetchProperties();
    console.log(properties);
  }, []);

  function parseDate(move_in_date) {
    const moveInDate = new Date(property.move_in_date);
    const formattedDate = moveInDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    return formattedDate;
  }
  const imgKeywords = [
    'house', 'garden', 'kitchen', 'foyer', 'family', 'apartment','neighborhood', 'bedroom', 'balcony', 'roof','lawn'
  ]

  function scrollToBottom() {
    const sendButton = document.getElementById("send");
    sendButton.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {property && (
        <div className="property rounded">
          <nav></nav>

          <div className="top-details px-5">
            <div className="d-flex flex-column">
              <h5>
                <i class="fa-solid fa-house"></i>&nbsp;{category}
                &nbsp;&nbsp;
                <span className="color-gray">
                  <i class="fa-solid fa-location-dot" />
                  &nbsp;
                  {property.length !== 0
                    ? property.address.city + ", " + property.address.province
                    : ""}
                </span>
              </h5>
              <h2>
                {property.bedrooms} Beds, {property.bathrooms} Baths
              </h2>
              <h5 className="h5-gray">
                <span className="color-purple">${property.rent}</span> &nbsp;per
                month
              </h5>
            </div>

            <div>
              <button className="hh-btn-large" onClick={scrollToBottom}>
                <span className="bg-color color-white">Contact landlord</span>
                <i class="fa-regular fa-envelope color-white"></i>
              </button>
            </div>
          </div>
          <div>
            <div className="property-gallery">
              <div class="gallery__holder">
                {/* <div className="gallery-item"
                  style={{
                    backgroundImage: `url('${property.feature_img}')`,
                  }}
                >
                </div> */}
                
                {[...Array(10)].map((x, i) =>
                
                  (property.imgs.length && property.imgs[i]) ?
                    <div
                    className="gallery-item"
                    style={{
                      backgroundImage: `url('${property.imgs[i]}')`,
                    }}
                  ></div>

                  :
                  <div
                    className="gallery-item"
                    style={{
                      backgroundImage: `url('https://source.unsplash.com/random/600x600?${imgKeywords[i]}')`,
                    }}
                  ></div>
                )}
                  
                
                {/* {property.imgs.length &&
                  property.imgs.map((img, i) => (
                    <div
                      className="gallery-item"
                      style={{
                        backgroundImage: `url('${img}')`,
                      }}
                    ></div>
                  ))} */}
                  
              </div>
            </div>
            <div className="d-flex px-4">
              <div className="w-75">
                <div className="rounded hh-shadow hh-bg p-4">
                  <h3>Location</h3>
                  <h4>
                    <i class="fa-solid fa-location-dot"></i>{" "}
                    {property.address.street},{property.address.city}
                  </h4>
                  {property.address.geo && <div class="map-holder">
                    <Maps
                      lng={property.address.geo.lng}
                      lat={property.address.geo.lat}
                    ></Maps>
                  </div>}
                </div>
                <div className="prop-detail-card-group w-100 rounded hh-shadow hh-bg-white">
                  <div className=" prop-detail-card-1">
                    <h3>Description</h3>
                    <p>{property.desc}</p>
                  </div>
                  <div className="prop-detail-card-2">
                    <h3>Details</h3>
                    <div className="prop-detail-card-2-row">
                      <div className="col-property-detail">
                        <h5>
                          <i class="fa-solid fa-bed detail-icon"></i>Bedroom
                        </h5>
                        <p>{property.bedrooms}</p>
                      </div>
                      <div className="col-property-detail">
                        <h5>
                          <i class="fa-solid fa-bath detail-icon"></i>Bathroom
                        </h5>
                        <p>{property.bathrooms}</p>
                      </div>
                    </div>
                    <div className="prop-detail-card-2-row">
                      <div className="col-property-detail">
                        <h5>
                          <i class="fas fa-couch"></i>&nbsp;Furnishing
                        </h5>
                        <p>{property.furnishing}</p>
                      </div>
                      <div className="col-property-detail">
                        <h5>
                          <i class="fa-solid fa-vector-square"></i>&nbsp;Carpet
                          Area
                        </h5>
                        <p>{property.carpet_area} sqm</p>
                      </div>
                    </div>
                    <div className="prop-detail-card-2-row">
                      <div className="col-property-detail">
                        <h5>
                          <i className="fa-solid fa-truck"></i>&nbsp;MOVE-IN
                          DATE
                        </h5>
                        <p>{parseDate(property.move_in_date)}</p>
                      </div>
                    </div>
                    <div className="prop-restriction-detail-group">
                      {
                        allTags.map((val,i)=>(
                          <div className={`d-inline pill rounded m-1 px-2 py-1
                            ${property.tags.includes(val.id) ? 'hh-bg-green' : 'hh-bg-light opacity-50'}
                          `}>
                          { property.tags.includes(val.id) ? (<i class="fa fa-solid fa-check mx-1"></i>) : '' }
                          {val.label}
                          </div> 
                        ))
                      }
                    </div>
                    <h3>Lease Terms</h3>
                    <p>{property.lease_terms}</p>
                  </div>
                </div>
              </div>
              {user && <PropertyContact className="w-25" property={property}></PropertyContact>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Property;
