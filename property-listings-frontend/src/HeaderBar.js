import React, { useState } from "react";

import HouseIcon from './HouseIcon';
import TitleSearchAddBtn from './TitleSearchAddBtn';
import MenuIcon from './MenuIcon';

import PropertyListingForm from "./PropertyListingForm";
import CategoryBar from './CategoryBar';

function HeaderBar({propertySearch, handleCategoryChange, properties, setProperties}) {

  const [showForm, setShowForm] = useState(false);

  const [propertyName, setPropertyName] = useState("")
  const [location, setLocation] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [price, setPrice] = useState(0)

  const options = [
    {value: "", text: "Choose Category:"},
    {value: "House", text: "House"},
    {value: "Beach/Tropical", text: "Beach/Tropical"},
    {value: "Cabin", text: "Cabin"},
    {value: "Best Pools", text: "Best Pools"}
  ];

  const [formCategory, setFormCategory] = useState(options[0].value);

  
  const [bedrooms, setBedrooms] = useState(0)
  const [bathrooms, setBathrooms] = useState(0)


  function showFormHandle() {
    setShowForm((showForm) => !showForm);
  }

  function propertyNameInput(event){
    setPropertyName(event.target.value)
  }

  function locationInput(event){
    setLocation(event.target.value)
  }

  function imgUrlInput(event){
    setImgUrl(event.target.value)
  }

  function priceInput(event){
    setPrice(event.target.value)
  }

  function formCategoryInput(event){
    setFormCategory(event.target.value)
  }

  function bedroomsInput(event){
    setBedrooms(event.target.value)
  }

  function bathroomsInput(event){
    setBathrooms(event.target.value)
  }

  function formSumbitHandle(event){
    event.preventDefault()

    const newProperty = {
      name: propertyName,
      location: location,
      propertyUrl: imgUrl,
      price: parseInt(price),
      category: formCategory,
      bedrooms: parseInt(bedrooms),
      bathrooms: parseInt(bathrooms)
    }

    // create error message
    // error or window saying which ever one isnt filled
    if(newProperty.propertyName === "" || newProperty.location === "" || newProperty.itemUrl === "" || newProperty.price === 0 || newProperty.category === "" || newProperty.bedrooms === 0 || newProperty.bathrooms === 0 ) return

    // fetch("http://localhost:3000/properties", {
    fetch("http://localhost:9292/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProperty),
    })
      .then((r) => r.json())
      .then((newPropertyData) => setProperties([...properties ,newPropertyData]));

    event.target.reset()
    setFormCategory(options[0].value)
  }


  return (
    <div className="headerBar">
      <div className="headerBarGrid">

        <HouseIcon />

        <TitleSearchAddBtn showForm={showForm} showFormHandle={showFormHandle} propertySearch={propertySearch}/>
        
        <MenuIcon />

      </div>

      {showForm ? <PropertyListingForm options={options} formCategory={formCategory} propertyNameInput={propertyNameInput} locationInput={locationInput} imgUrlInput={imgUrlInput} priceInput={priceInput} formCategoryInput={formCategoryInput} bedroomsInput={bedroomsInput} bathroomsInput={bathroomsInput} formSumbitHandle={formSumbitHandle}/> : <CategoryBar handleCategoryChange={handleCategoryChange} />}

      <hr className="hr"></hr>

      <br></br>
      <br></br>
  </div>
  );
}

export default HeaderBar;