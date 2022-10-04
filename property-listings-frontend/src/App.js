import './App.css';
import React, { useState, useEffect, useRef} from "react";

import HeaderBar from './HeaderBar';
import FilterButton from './FilterButton';
import PropertyListing from './PropertyListing';
import PropertyListingContainer from './PropertyListingContainer';


function App() {
  const [properties, setProperties] = useState([])

  const [category, setCategory] = useState("All");
  // const [catorgey, setCatorgey] = useState("All");
  // category
  // console.log(catorgey)

  const [searchInput, setSearchInput] = useState("")

  const prevCategoryRef = useRef();

  useEffect(() => {
    prevCategoryRef.current = category;    
  }, [category]);



  function handleCategoryChange(selectCategory){

    if (selectCategory.target.childNodes.length === 0){
      setCategory(` ${selectCategory.target.alt}`)
    }
    else if (selectCategory.target.childNodes[4] !== ""){
      setCategory(selectCategory.target.childNodes[4].wholeText)
      // selectCatorgey.target.className = "activeCategoryBarBtn"
    }

    if((selectCategory.target.alt ||selectCategory.target.childNodes[4].wholeText) === prevCategoryRef.current){
      setCategory("All")
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


  // maybe by location too
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
    if(category === "All"){
      return showProperties
    }

    if(category === " House"){
      // console.log("Houses")
      return showHouses
    }

    if(category === " Beach/Tropical"){
      return showBeachTropicals
    }

    if(category === " Cabin"){
      return showCabins
    }

    if(category === " Best Pools"){
      return showBestPools
    }

  }

  return (
    <div className="App">

      <HeaderBar propertySearch={propertySearch} handleCategoryChange={handleCategoryChange} />

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
