import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Card, Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddProperty() {
  return (
    <div id="AddProperty" className="property pb-5">
      <div class="header">
      <div class="container-fluid mb-5">
        <div class="row">
          <div className="direction-column">
          
          <div className="d-flex direction-row align-items-center justify-content-between">
            <h1 className="">YOUR PROPERTY FOR RENT</h1>{" "}
            <button className="contact-btn">
              <span className="bg-color color-white">Post your property</span>
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
            <div class="hh-container-white col-md-6 p-4">

              <div class="hh-form">
                  <h2 class="form-label">
                    Types
                  </h2>
                  <div class="hh-types d-flex flex-wrap">
                    <span class="badge bg-success">Pet friendly</span>
                    <span class="badge bg-secondary">No smoking</span>
                    <span class="badge bg-secondary">No parking</span>
                    <span class="badge bg-secondary">Shared bathroom</span>
                    <span class="badge bg-success">Laundry included</span>
                    <span class="badge bg-secondary">Close to establishments</span>
                    <span class="badge bg-success">Close to skytrain</span>
                    <span class="badge bg-secondary">No smoking</span>
                    <span class="badge bg-success">Utility included</span>
                    <span class="badge bg-success">No parking</span>

                  </div>
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


          </div>

        </div>

      </div>
    </div>
  );
}

export default AddProperty;
