import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";

import { Image, CloudinaryContext } from "cloudinary-react";
import { Cloudinary } from "cloudinary-core";

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
    componentRestrictions: { country: ["us", "ca"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
  address1Field.focus();

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();
  let address1 = "";
  let postcode = "";

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // place.address_components are google.maps.GeocoderAddressComponent objects
  // which are documented at http://goo.gle/3l5i5Mr
  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number": {
        address1 = `${component.long_name} ${address1}`;
        break;
      }

      case "route": {
        address1 += component.short_name;
        break;
      }

      case "postal_code": {
        postcode = `${component.long_name}${postcode}`;
        break;
      }

      case "postal_code_suffix": {
        postcode = `${postcode}-${component.long_name}`;
        break;
      }

      case "locality":
        document.querySelector("#locality").value = component.long_name;
        break;

      case "administrative_area_level_1": {
        document.querySelector("#state").value = component.short_name;
        break;
      }

      case "country":
        document.querySelector("#country").value = component.long_name;
        break;
    }
  }

  address1Field.value = address1;
  postalField.value = postcode;

  // After filling the form with address components from the Autocomplete
  // prediction, set cursor focus on the second address line to encourage
  // entry of subpremise information such as apartment, unit, or floor number.
  address2Field.focus();
}

function AddProperty() {
  const [image, setImage] = useState("");

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

  useEffect(() => {
    initAutocomplete();
  }, []);

  const [images, setImages] = useState([]);

  const tagOptions = [
    "no smoking",
    "pet friendly",
    "parking available",
    "has laundry",
    "close to park",
    "close to transit",
    "shared bathroom",
  ];

  const [selectedTags, setTags] = useState([]);

  /*property={
    tags: selectedTags
  }*/

  return (
    <form id="address-form" action="" method="get" autocomplete="off">
      <div id="AddProperty" className="property pb-5">
        <div class="header">
          <div class="container-fluid mb-5">
            <div class="row">
              <div className="direction-column mr-4">
                <div className="d-flex direction-row align-items-center justify-content-between">
                  <h1 className="">YOUR PROPERTY FOR RENT</h1>{" "}
                  <button className="contact-btn">
                    <span className="bg-color color-white">
                      Post your property
                    </span>
                    <i class="fa-regular fa-envelope color-white"></i>
                  </button>
                </div>
                <h5>
                  Here you can easily upload your rental property and make it
                  available to the others to rent.
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div class="body">
          <div class="container-fluid mb-6 px-5">
            <div class="hh-container-white h-auto row p-4 g-5 my-5">
              <div class="col-md-6">
                <h3>Property</h3>

                <div class="hh-form">
                  <h4 class="form-label">Description</h4>
                  <textarea name="description" class="form-control"></textarea>
                </div>
                <div class="hh-form">
                  <h4 class="form-label">Location</h4>
                  <input
                    name="address"
                    id="address"
                    class="form-control"
                    required
                    autocomplete="off"
                  ></input>
                </div>

                <div class="d-flex">
                  <div class="hh-form w-50 pr-3" style={{ margin: "4px" }}>
                    <h4 class="form-label">
                      Unit, suite #
                    </h4>
                    <input
                      name="address2"
                      id="address2"
                      class="form-control"
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
                    <input name="state" id="state" class="form-control"></input>
                  </div>
                  <div class="hh-form col" style={{ margin: "4px" }}>
                    <h4 class="form-label">Postal Code*</h4>
                    <input
                      name="postcode"
                      id="postcode"
                      class="form-control "
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
                    ></input>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="d-flex justify-content-between mb-3">
                  <h3>Featured</h3>
                  <button class="btn btn-primary btn-outline">
                    Change photo
                  </button>
                </div>

                <div class="">
                  <img
                    class="w-100 h-100"
                    src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                  />
                </div>
              </div>
            </div>

            <div class="hh-container-white h-auto row p-4 g-5 my-5">
              <div class="col">
                <h3>Details</h3>
                <div class="hh-detail-inputs d-flex align-items-stretch w-100">
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Bedroom</h4>
                    <select class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>

                      <option>4</option>
                      <option>5</option>
                      <option>6</option>

                      <option>7</option>
                      <option>8</option>
                    </select>
                  </div>
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Bathroom</h4>
                    <select class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Carpet Area</h4>
                    <div class="d-flex align-items-center">
                      <input type="number" class="form-control flex-fill" />
                      <span class="sqm">sqm</span>
                    </div>
                  </div>
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Furnishing</h4>
                    <select class="form-control">
                      <option>Furnished</option>
                      <option>Semi-furnished</option>
                      <option>Unfurnished</option>
                    </select>
                  </div>
                  <div class="hh-form flex-fill mr-2">
                    <h4 class="form-label">Move-in Date</h4>
                    <input type="date" class="form-control" />
                  </div>
                  <div class="hh-form w-20 pr-3">
                    <h4 class="form-label">Price</h4>
                    <div class="d-flex">
                      <input
                        name="price"
                        type="number"
                        class="form-control"
                      ></input>
                      <span class="dollar my-auto">$</span>
                    </div>
                  </div>
                  <div class="hh-form w-40">
                    <h4 class="form-label">Type</h4>
                    <select name="type" class="form-control w-100">
                      <option>Independent</option>
                      <option>Apartment unit</option>
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
                      <span class="badge hh-bg-green color-green">
                        Pet friendly
                      </span>
                      <span class="badge hh-bg-green color-gray">
                        No smoking
                      </span>
                      <span class="badge hh-bg-green color-gray">
                        No parking
                      </span>
                      <span class="badge hh-bg-light hh-border-dark color-gray-dark text-dark">
                        Shared bathroom
                      </span>
                      <span class="badge hh-bg-green color-green">
                        Laundry included
                      </span>
                      <span class="badge hh-bg-green color-gray">
                        Close to establishments
                      </span>
                      <span class="badge hh-bg-green color-green">
                        Close to skytrain
                      </span>
                      <span class="badge hh-bg-light hh-border-dark color-dark text-dark">
                        No smoking
                      </span>
                      <span class="badge hh-bg-green color-green">
                        Utility included
                      </span>
                      <span class="badge hh-bg-green color-green">
                        No parking
                      </span>
                    </div>
                  </div>
                  <div class="hh-form">
                    <h4 class="form-label">Lease Terms</h4>
                    <textarea
                      name="description"
                      class="form-control"
                      placeholder="Minimum lease duration, payment terms, etc..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="col-md-6 pr-l-md-1">
                <div class="hh-container-white p-4">
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
                          <button
                             className="delete-button"
                          >
                            <i class="fa fa-solid fa-close"/>
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="uploadImg">
                      <label className="imgLabel hh-image-holder-small col-4 p-1 hh-border-orange rounded">
                        <i class="fa-regular fa-plus color-orange"></i>
                        <input
                          type="file"
                          //  onChange={(e) => setImage(e.target.files[0])}
                          onChange={(e) => submitImage(e, e.target.files[0])}
                          //    onClick={submitImage}

                          // className="hh-image-holder-small col-4 p-1 hh-border-orange rounded"
                        ></input>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddProperty;
