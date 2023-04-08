import PtCard from "./PtCard";
import { useState,useEffect } from "react";
import { json } from "react-router-dom";

const Ptcontainer= ()=> {

  const [properties, setProperties] = useState([])
  useEffect(() => { //should not make this upper funtion async coz of obvious reason
    
       const fetchProperties = async () => {
      //so making this on async
       const response =  await fetch('http://localhost:4000/api/properties') //This will output the response object, which includes properties such as status, statusText, headers, and body.
       const json = await response.json();  //parsing the response to an array of the data comming from the body
       
       if( response.ok){
          setProperties(json)  
       }
       
    }
    fetchProperties()
    console.log(properties)
  },[]) //fire once coz [] empty array
  
  return (
       <div className="wrapper-grid">
             {properties &&  properties.map((property) => (
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
        />
      ))}
    </div>

  );
}
export default Ptcontainer