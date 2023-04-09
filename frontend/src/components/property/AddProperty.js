import React, { Fragment,  useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-datepicker/dist/react-datepicker.css";

function AddProperty() {

  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
    'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  ])

  


  return (
    <div id="AddProperty" className="property pb-5">
      <div class="header">
      <div class="container-fluid mb-5">
        <div class="row">
          <div className="direction-column">
          
          <div className="d-flex direction-row align-items-center justify-content-between">
            <h1 className="">YOUR PROPERTY FOR RENT</h1>{" "}
            <button className="hh-btn-large">
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

      </div>
      
      <div class="body">
        <div class="container-fluid mb-6 px-5">
          <div class="hh-container-white h-auto row p-4 g-5 my-5">
            <div class="col-md-6">
              
              <h3>Property</h3>

              <div class="hh-form">
                <h4 class="form-label">
                  Description
                </h4>
                <textarea name="description" class="form-control">
                </textarea>
              </div>
              <div class="hh-form">
                <h4 class="form-label">
                  Location
                </h4>
                <input name="location" class="form-control">
                </input>
              </div>

              <div class="d-flex">
                <div class="hh-form w-50 pr-3">
                  <h4 class="form-label">Price</h4>
                  <input name="price" type="number" class="form-control"></input>
                </div>
                <div class="hh-form w-50">
                  <h4 class="form-label">Type</h4>
                  <select name="type" class="form-control w-100">
                    <option>Independent</option>
                    <option>Apartment unit</option>
                  </select>
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
                <img class="w-100 h-100" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"/>
              </div>
            </div>

          </div>

          <div class="hh-container-white h-auto row p-4 g-5 my-5">
            <div class="col">
              <h3>Details</h3>
              <div class="hh-detail-inputs d-flex align-items-stretch w-100">
                <div class="hh-form flex-fill mr-2">
                  <h4 class="form-label">
                    Bedroom
                  </h4>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="hh-form flex-fill mr-2">
                  <h4 class="form-label">
                    Bathroom
                  </h4>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="hh-form flex-fill mr-2">
                  <h4 class="form-label">
                    Carpet Area
                  </h4>
                  <div class="d-flex align-items-center">
                    <input type="number" class="form-control flex-fill"/>
                    <span class="sqm">sqm</span>
                   </div> 
                </div>
                <div class="hh-form flex-fill mr-2">
                  <h4 class="form-label">
                    Furnishing
                  </h4>
                  <select class="form-control">
                    <option>Furnished</option>
                    <option>Semi-furnished</option>
                    <option>Unfurnished</option>
                  </select>
                </div>
                <div class="hh-form flex-fill mr-2">
                  <h4 class="form-label">
                    Move-in Date
                  </h4>
                  <input type="date" class="form-control"/>
                </div>

              </div>
              
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 p-r-md-1">
              <div class="hh-container-white h-100 p-4">
               <div class="hh-form">
                  <h3 class="form-label">
                    Types
                  </h3>
                  <div class="hh-types d-flex flex-wrap">
                    <span class="badge hh-bg-green-light color-green">Pet friendly</span>
                    <span class="badge hh-bg-light color-gray">No smoking</span>
                    <span class="badge hh-bg-light color-gray">No parking</span>
                    <span class="badge hh-bg-light color-gray">Shared bathroom</span>
                    <span class="badge hh-bg-green-light color-green">Laundry included</span>
                    <span class="badge hh-bg-light color-gray">Close to establishments</span>
                    <span class="badge hh-bg-green-light color-green">Close to skytrain</span>
                    <span class="badge hh-bg-light color-gray">No smoking</span>
                    <span class="badge hh-bg-green-light color-green">Utility included</span>
                    <span class="badge hh-bg-green-light color-green">No parking</span>
                  </div>
               </div>
                <div class="hh-form">
                  <h4 class="form-label">
                    Lease Terms
                  </h4>
                  <textarea name="description" class="form-control" placeholder="Minimum lease duration, payment terms, etc...">
                  </textarea>
                </div>
              </div>
            </div>
            
            <div class="col-md-6 pr-l-md-1">
              <div class="hh-container-white p-4">
                <div class="d-flex justify-content-between mb-3">
                  <h3>More photos</h3>
                  <button class="btn btn-primary btn-outline">
                    Upload photos
                  </button>
                </div>
                <div class="row">
                  {
                    images.map((image, index)=>(
                      <div class="col-4 p-1" >
                        <div class="hh-image-holder-small" style={{    
                          backgroundImage: `url(${image})`
                        }}></div>
                      </div>
                    ))
                  }
                  <button class="hh-image-holder-small col-4 p-1 hh-border-orange rounded">
                  <i class="fa-regular fa-plus color-orange"></i>

                  </button>
                  
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
    </div>
  );
}

export default AddProperty;
