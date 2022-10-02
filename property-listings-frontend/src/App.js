import './App.css';
import React, { useState, useEffect } from "react";

import HeaderBar from './HeaderBar';
import FilterButton from './FilterButton';
import PropertyListing from './PropertyListing';
import PropertyListingContainer from './PropertyListingContainer';


function App() {
  const [properties, setProperties] = useState([])
  const [searchInput, setSearchInput] = useState("")

  function propertySearch(event){
    setSearchInput(event.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((r) => r.json())
      .then((propertiesData) => 
      setProperties(propertiesData)
      );

  }, []);


  const searchedProperties = properties.filter((property) => 
  (property.name.toLowerCase()).includes(searchInput.toLowerCase()))


  const allProperties = searchedProperties.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      />
    )
  })


  return (
    <div className="App">

      <HeaderBar propertySearch={propertySearch}/>

      <PropertyListingContainer allProperties={allProperties}/>

      <FilterButton />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}

export default App;
