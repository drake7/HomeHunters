import React, { Fragment, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";
import { Image, CloudinaryContext } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import {  currentUser } from '../../store/login-store';
import {  useSelector} from 'react-redux';

import axios from "axios";

function convertDateFormat(inputDateStr) {
  const date = new Date(inputDateStr + "T07:00:00.000Z");
  return date.toISOString();
}

async function postProperty(propertyObject){

  try {
    const response = await axios.post("http://localhost:4000/api/properties", propertyObject, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }

}

function AddProperty() {
  const navigate = useNavigate();

  const user = useSelector(currentUser)

  const [category, setCategory] = useState("");

  //single
  const [bedrooms, setBedroom] = useState("");
  const [bathrooms, setBathroom] = useState("");
  const [carpetArea, setCarpetArea] = useState("");  
  const [furnishing, setFurnishing] = useState("");
  const [moveInDate, setmoveInDate] = useState("");
  const [leaseTerm, setLeaseTerm] = useState("");
  const [rent, setRent] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  // address
  const [unit, setUnit] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [geo, setGeo] = useState({
    long: 0,
    lat: 0
  })

  //array
  const [image, setImage] = useState("");

  // map
  let autocomplete;
let address1Field;
let address2Field;
let postalField;

function initAutocomplete() {
  address1Field = document.querySelector("#address");
  address2Field = document.querySelector("#address2");
  postalField = document.querySelector("#postcode");

  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  autocomplete = new window.google.maps.places.Autocomplete(address1Field, {
    componentRestrictions: { country: ["ca"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  address1Field.focus();
  autocomplete.addListener("place_changed", fillInAddress);
}

async function fillInAddress() {
  const place = await autocomplete.getPlace();
  console.log({place})
  let address1 = "";
  let postcode = "";

  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        address1 = `${component.long_name} ${address1}`;
        setStreet(address1)
        break;
      }

      case "route": {
        address1 += component.short_name;
        setStreet(address1)
        break;
      }

      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;
        setZipcode(postcode)
        break;
      }

      case "postal_code_suffix": {
        postcode = `${postcode}-${component.long_name}`;
        setZipcode(postcode)
        break;
      }

      case "locality":
        document.querySelector("#locality").value = component.long_name;
        setCity(component.long_name)
        break;

      case "administrative_area_level_1": {
        document.querySelector("#state").value = component.short_name;
        setProvince(component.short_name)
        break;
      }

      case "country":
        document.querySelector("#country").value = component.long_name;
        setCountry(component.long_name)
        break;
    }
  }

  address1Field.value = address1;
  postalField.value = postcode;

  const lat = await place.geometry.location.lat()
  const long = await place.geometry.location.long()
  setGeo({lat, long})
  
  address2Field.focus();
}

  //amenities  
  const submitImage = (evt, file) => {
    console.log({ evt, file });
    setImage(file);
    
    const data = new FormData();
    // data.append("file",image);
    data.append("file", file);
    data.append("upload_preset", "wjrbpbln");
    data.append("cloud_name", "dwjrgaljd");

    fetch("https://api.cloudinary.com/v1_1/dwjrgaljd/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(setImages([...images, data.url]));
      
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const [images, setImages] = useState([]);

  const tagOptions = [
    "no smoking",
    "pet friendly",
    "parking available",
    "has laundry",
    "close to park",
    "close to transit",
    "shared bathroom",
    "Air conditioning",
    "Oven/stove",
    "Walk-in closets",
    "Patio/balcony",
    "On-site parking",
    "Security system",
    "High-speed internet",
    "Microwave"
  ];

  const [selectedTags, setTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setTags(selectedTags.filter((t) => t !== tag));
    } else {
      setTags([...selectedTags, tag]);
    }
  };
  /*property={
    tags: selectedTags
  }*/


  async function postThisProperty(){
    // if (country != "Canada"){
    //   return
    // }
    const property = {
      address: {
        province,
        city,
        street,
        zipcode,
        geo
      },
      desc,
      category,
      bedrooms,
      bathrooms,
      carpet_area: carpetArea,
      rent,
      lease_terms: leaseTerm,
      furnishing,
      move_in_date: convertDateFormat(moveInDate),
      tags: [],
      imgs: [...images],
      feature_img: images ? images[0] : "",
      landlord_user_id: user._id,
  }
  console.log({property})
  const newProperty = await postProperty(property)
  if(newProperty._id){
    navigate(`/property?id=${newProperty._id}`)
  }
}

useEffect(() => {
  initAutocomplete();
}, []);

  return (
    // <form id="address-form" action="" method="get">
    <div id="AddProperty" className="property pb-5">
        <div class="header container-fluid mb-5">
          <div class="row">
            <div className="direction-column">
              <div className="d-flex direction-row align-items-center justify-content-between">
                <h1 className="">Add a property for rent</h1>{" "}
                <button onClick={postThisProperty} className="hh-btn-large">
                  <span>Post your property</span>
                  <i class="fa-regular fa-envelope color-white"></i>
                </button>

              </div>
              <h5>
                Here you can easily upload your rental property and make it available
                to the others to rent.
              </h5>
            </div>
          </div>
        </div>
        <div class="body">
          <div class="container-fluid mb-6 p-5">
            <div class="h-auto row gx-5">
              <div class="col-md-6 hh-bg-white hh-shadow p-4 rounded mr-2">
                <h3>Property</h3>

                <div class="hh-form">
                  <h4 class="form-label">Description</h4>
                  <textarea name="description" class="form-control"  
                  value={desc}
                    onChange={(event) => setDesc(event.target.value)}></textarea>
                </div>
                <div class="hh-form">
                  <h4 class="form-label">Location</h4>
                  <input
                    name="address"
                    id="address"
                    class="form-control"
                    required
                    autocomplete="off"
                    onChange={(event) => setStreet(event.target.value)}
                  ></input>
                </div>

                <div class="d-flex">
                  <div class="hh-form w-50 pr-3" style={{ margin: "4px" }}>
                    <h4 class="form-label">Unit, suite #</h4>
                    <input
                      name="address2"
                      id="address2"
                      class="form-control"
                      onChange={(event) => setUnit(event.target.value)}
                    ></input>
                  </div>
                  <div class="hh-form w-50 pr-3" style={{ margin: "4px" }}>
                    <h4 class="form-label">City*</h4>
                    <input
                      name="locality"
                      id="locality"
                      class="form-control"
                    ></input>
                  </div>
                </div>

                <div class="d-flex">
                  <div class="hh-form col pr-3" style={{ margin: "4px" }}>
                    <h4 class="form-label">State/Province*</h4>
                    <input name="state" id="state" class="form-control"
                    onChange={(event) => setProvince(event.target.value)}
                    ></input>
                  </div>
                  <div class="hh-form col" style={{ margin: "4px" }}>
                    <h4 class="form-label">Postal Code*</h4>
                    <input
                      name="postcode"
                      id="postcode"
                      class="form-control "
                      onChange={(event) => setZipcode(event.target.value)}
                    ></input>
                  </div>
                </div>
                <div class="d-flex ml-2">
                  <div class="hh-form w-50 pr-3" style={{ margin: "4px" }}>
                    <h4 class="form-label">Country/Region*</h4>
                    <input
                      name="country"
                      id="country"
                      class="form-control"
                      onChange={(event) => setCountry(event.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
              <div class="col-md-6 hh-bg-white hh-shadow p-4 rounded ml-2">
                  <div class="d-flex justify-content-between mb-3">
                    <h3>More photos</h3>
                  </div>
                  <div class="row">
                    {images.map((image, index) => (
                      <div class="col-4 p-1">
                        <div
                          className="hh-image-holder-small"
                          style={{ backgroundImage: `url(${image})` }}
                        >
                          <button className="delete-button">
                            <i class="fa fa-solid fa-close" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="uploadImg">
                      <label className="imgLabel hh-image-holder-small col-4 p-1 hh-border-orange rounded">
                        <i class="fa-regular fa-plus color-orange"></i>
                        <input
                          type="file"
                          onChange={(e) => submitImage(e, e.target.files[0])}
                        ></input>
                      </label>
                    </div>
                  </div>
              </div>
            </div>

            <div class="hh-container-white h-auto row p-4 g-5 my-5">
              <div class="col">
                <h3>Details</h3>
                <div class="hh-detail-inputs d-flex align-items-stretch w-100">
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Bedroom</h4>
                    <select
                      class="form-control"
                      value={bedrooms}
                      onChange={(event) => setBedroom(event.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Bathroom</h4>
                    <select class="form-control" 
                    value={bathrooms}
                    onChange={(event) => setBathroom(event.target.value)}>
                      <option  value="1">1</option>
                      <option  value="2">2</option>
                      <option  value="3">3</option>
                    </select>
                  </div>
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Carpet Area</h4>
                    <div class="d-flex align-items-center">
                      <input type="number" class="form-control flex-fill"  
                     value={carpetArea}
                     onChange={(event) => setCarpetArea(event.target.value)} 
                      />
                      <span class="sqm">sqm</span>
                    </div>
                  </div>
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Furnishing</h4>
                    <select class="form-control"
                     value={furnishing}
                     onChange={(event) => setFurnishing(event.target.value)}>
                      <option value="Furnished">Furnished</option>
                      <option value="Semi-furnished">Semi-furnished</option>
                      <option value="Unfurnished">Unfurnished</option>
                    </select>
                  </div>
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Move-in Date</h4>
                    <input type="date" class="form-control" 
                    value={moveInDate}
                    onChange={(event) => setmoveInDate(event.target.value)}/>
                  </div>
                  <div class="hh-form w-20 pr-3">
                    <h4 class="form-label">Price</h4>
                    <div class="d-flex">
                      <input
                        name="price"
                        type="number"
                        class="form-control"
                        value={rent}
                     onChange={(event) => setRent(event.target.value)}
                      ></input>
                      <span class="dollar my-auto">$</span>
                    </div>
                  </div>
                  <div class="hh-form w-40">
                    <h4 class="form-label">Type</h4>
                    <select name="type" class="form-control w-100"
                    value={type}
                    onChange={(event) => setType(event.target.value)}>
                      <option value="Independent">Independent</option>
                      <option value="Apartment unit">Apartment unit</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 p-r-md-1">
                <div class="hh-container-white h-100 p-4">
                  <div class="hh-form">
                    <h3 class="form-label">Types</h3>
                    <div class="hh-types d-flex flex-wrap">
                      {tagOptions.map((tag) => (
                       <span key={tag} 
                       
                        className = {
                          selectedTags.includes(tag)
                        ? "badge hh-bg-green color-green"
                        : "badge hh-bg-gray color-gray"}
                       
                       onClick={() => handleTagClick(tag)}
                     >{tag}
                       </span> 
                      ))}
                      </div>
                  </div>
                  <div class="hh-form">
                    <h4 class="form-label">Lease Terms</h4>
                    <textarea
                      name="lease"
                      class="form-control"
                      placeholder="Minimum lease duration, payment terms, etc..."
                      value={leaseTerm}
                      onChange={(event) => setLeaseTerm(event.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    // </form>
  );
}

export default AddProperty;
