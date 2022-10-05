import React from "react";

function PropertyListing({property, handleDelProperty}) {

  const {id, itemUrl, name, location, price, category, bedrooms, bathrooms} = property

  function propertyIcon(category){
    if (category === "House"){
      return <img className="categoryBarImg" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="House" />
    }
    if (category === "Cabin"){
      return <img className="categoryBarImg" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="Cabin" />
    }
    if (category === "Beach/Tropical"){
      return <img className="categoryBarImg" src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="Beach/Tropical" />
    }
    if (category === "Best Pools"){
      return <img className="categoryBarImg" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="Best Pools" />
    }

  }

  function handleDeleteClick() {
    
    fetch(`http://localhost:3000/properties/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelProperty(property));

  }

  return (
    <div className="categoryBar">
      <div className="categoryBarGrid">

        <div> 
          <img style={{"width" : "250px", "height" : "250px", "border": "3px solid black", "borderRadius" : "10px"}} src={itemUrl} alt={category} />

          <h3>{name}</h3>
          <h5>{location}</h5>
          <h4>${price.toLocaleString('en-US')}</h4>

          {propertyIcon(category)}

          <h6>{bedrooms} Bedrooms</h6>
          <h6>{bathrooms} Bathrooms</h6>
          {/* make bigger and add hover color */}

          <span className="propertyDetails" >✍🏼</span> &nbsp; 
          | 
          &nbsp; <span className="propertyDetails" onClick={handleDeleteClick}>🗑</span>
      

        </div>
      </div>
    </div>
  );
}

export default PropertyListing;