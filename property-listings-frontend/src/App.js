import './App.css';
import React, { useState, useEffect } from "react";

import HeaderBar from './HeaderBar';
import FilterButton from './FilterButton';
import PropertyListing from './PropertyListing';


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

      <div className="propertyListingContainer">
        <div className="propertyListingGrid">

          {allProperties}

        </div>
      </div>

      



      <FilterButton />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
 
     {/* 1 HeaderBar */}
        {/* ThreeDHouse  */}
        {/* SearchBarButton */}
        {/* CreateListingButton */}
        {/* Menu */}
      {/* 2 PropertyListingForm */}
      {/* 3 CategoryBar  */}
      {/* 4 FilterButton */}
      {/* 5 ListingsContainer */}

    </div>
  );
}

export default App;
