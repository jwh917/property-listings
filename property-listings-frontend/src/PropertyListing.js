import React, {useState} from "react";

function PropertyListing({property, handleDelProperty}) {

  const {id, propertyUrl, name, location, price, category, bedrooms, bathrooms} = property

  const [bedroomNum, setBedroomNum] = useState(bedrooms)
  const [bathroomNum, setBathroomNum] = useState(bathrooms)

  function handleBedroomChange(event){
    setBedroomNum(event.target.value)
  }

  function handleBathroomChange(event){
    setBathroomNum(event.target.value)
  }

  function handleRoomsChange(){

    const newRoomNum = {
      "bedrooms": parseInt(bedroomNum),
      "bathrooms": parseInt(bathroomNum)
    }

    // fetch(`http://localhost:3000/properties/${id}`, {
    fetch(`http://localhost:9292/properties/${id}`, {
      
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bedrooms: newRoomNum.bedrooms,
        bathrooms: newRoomNum.bathrooms}),
    })
      .then((r) => r.json())
      .then((newRoomData) => console.log(newRoomData))
      
  }


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
    
    // fetch(`http://localhost:3000/properties/${id}`, {
    fetch(`http://localhost:9292/properties/${id}`, {
      
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelProperty(property));
  }


  return (
    <div className="propertyListing">
      <div className="propertyListingInfo">

        <div className="propertyListingBorder"> 
          <img className="propertyListingImg" src={propertyUrl} alt={category} />

          <h2>{name}</h2>
          <h5>{location}</h5>
          <h4>${price.toLocaleString('en-US')}</h4>

          {propertyIcon(category)}

          <br></br>

          <h4>{bedroomNum} Bedrooms</h4>
          <div>
            <input className="input-num" type="number" min="1" max="20" value={bedroomNum} onChange={handleBedroomChange}></input>
            &nbsp; <span className="propertyDetails" onClick={handleRoomsChange}>✍🏼</span>
          </div>

          <h4>{bathroomNum} Bathrooms</h4>
          <div>
            <input className="input-num" type="number" min="1" max="20" value={bathroomNum} onChange={handleBathroomChange}></input>
            &nbsp; <span className="propertyDetails" onClick={handleRoomsChange}>✍🏼</span>
          </div>

          <br></br>

          <span className="propertyDetails" onClick={handleDeleteClick}>🗑</span>

          <br></br>
          <br></br>
      
        </div>
      </div>
    </div>
  );
}

export default PropertyListing;