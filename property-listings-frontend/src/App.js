import './App.css';
import React, { useState, useEffect } from "react";

import HeaderBar from './HeaderBar';
import FilterButton from './FilterButton';
import PropertyListing from './PropertyListing';
import PropertyListingContainer from './PropertyListingContainer';


function App() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((r) => r.json())
      .then((propertiesData) => 
      setProperties(propertiesData)
      );

  }, []);

  const allProperties = properties.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      />
    )
  })


  return (
    <div className="App">

      <HeaderBar />

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
