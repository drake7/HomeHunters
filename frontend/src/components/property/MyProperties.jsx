import PtCard from "./PtCard";
import { useState,useEffect } from "react";
import axios from "axios";
import {  useSelector} from 'react-redux';
import {  currentUser } from '../../store/login-store';
import CTA from "../home/CTA";

const MyProperties = () => {
    const [properties, setProperties] = useState([])
    const user = useSelector(currentUser)
    useEffect(() => { //should not make this upper funtion async coz of obvious reason
      
         const fetchProperties = async () => {
        //so making this on async
         const response =  await fetch(`http://localhost:4000/api/properties/myProps/${user._id}`) //This will output the response object, which includes properties such as status, statusText, headers, and body.
         const json = await response.json();  //parsing the response to an array of the data comming from the body
         
         if( response.ok){
            setProperties(json)  
         }
         
      }
      fetchProperties()
      console.log(properties)
    },[]) //fire once coz [] empty array
    
    function handleDeleteProperty(id) {
        
        axios.delete(`http://localhost:4000/api/properties/${id}`)
       .then(response => {
           console.log("deleted property from DB:",response.data); // logs the deleted property to the console
           setProperties(prevProperties => prevProperties.filter(property => property._id !== id));
         })
       .catch(error => {
         console.error(error);
       });
      
     }
    
   
    return (<>
        <div className="header-home" style={{paddingTop:"0rem",marginTop:"0rem"}} >
        <div className="slogan" style={{marginBottom:"0rem"}}><h1>Manage your <span className="color-purple">Properties !!!</span></h1></div>
        </div>
         <div className="wrapper-grid">
               { properties.length ? ( properties.map((property) => (
          <PtCard
            key={property._id}
            id={property._id}
            feature_img={property.feature_img}
            category ={property.category}
           bedrooms={property.bedrooms}
           bathrooms={property.bathrooms}
           address={property.address}
           furnishing={property.furnishing}
           carpet_area={property.carpet_area}
           move_in_date={property.move_in_date}
           tags={property.tags}
           landlord_user_id={property.landlord_user_id}
           lease_terms={property.lease_terms}
           imgs={property.imgs}
           rent={property.rent}
           desc={property.desc}
           property={property}
           myProps={true}
           onDeleteProperty={handleDeleteProperty}
          />))
          ) : <><CTA title="Register to see more properties"
          link="/register"
          btnTxt="Sign up"
          dtl="Registering as a user lets you see all the properties and contact the landlords for viewing. IT’S FREE!" /></> }
      
      </div>
      </>
  
    );
}
 
export default MyProperties;