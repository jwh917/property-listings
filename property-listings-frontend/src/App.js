import './App.css';
import React, { useState, useEffect, useRef} from "react";

import HeaderBar from './HeaderBar';
import FilterButton from './FilterButton';
import PropertyListing from './PropertyListing';
import PropertyListingContainer from './PropertyListingContainer';


function App() {
  const [properties, setProperties] = useState([])

  const [catorgey, setCatorgey] = useState("All");
  // console.log(catorgey)

  const [searchInput, setSearchInput] = useState("")

  const prevCatorgeyRef = useRef();

  useEffect(() => {
    prevCatorgeyRef.current = catorgey;    
  }, [catorgey]);



  function handleCatorgeyChange(selectCatorgey){

    if (selectCatorgey.target.childNodes.length === 0){
      setCatorgey(` ${selectCatorgey.target.alt}`)
    }
    else if (selectCatorgey.target.childNodes[4] !== ""){
      setCatorgey(selectCatorgey.target.childNodes[4].wholeText)
      // selectCatorgey.target.className = "activeCategoryBarBtn"
    }

    if((selectCatorgey.target.alt ||selectCatorgey.target.childNodes[4].wholeText) === prevCatorgeyRef.current){
      setCatorgey("All")
      // selectCatorgey.target.className = "categoryBarBtn"
      }

      // try to make them active with out state for each button

  }


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


  const houses = searchedProperties.filter(property => property.category === "House");

  const beachTropicals = searchedProperties.filter(property => property.category === "Beach/Tropical");

  const cabins = searchedProperties.filter(property => property.category === "Cabin");

  const bestPools = searchedProperties.filter(property => property.category === "Best Pools");


  const showProperties = searchedProperties.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      />
    )
  })

  const showHouses = houses.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      />
    )
  })

  const showBeachTropicals = beachTropicals.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      />
    )
  })

  const showCabins = cabins.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      />
    )
  })

  const showBestPools = bestPools.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      />
    )
  })


  function displayItems(){
    if(catorgey === "All"){
      return showProperties
    }

    if(catorgey === " House"){
      console.log("Houses")
      return showHouses
    }

    if(catorgey === " Beach/Tropical"){
      return showBeachTropicals
    }

    if(catorgey === " Cabin"){
      return showCabins
    }

    if(catorgey === " Best Pools"){
      return showBestPools
    }

  }

  return (
    <div className="App">

      <HeaderBar propertySearch={propertySearch} handleCatorgeyChange={handleCatorgeyChange} />

      <PropertyListingContainer displayItems={displayItems}/>

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
