import './App.css';
import React, { useState, useEffect, useRef} from "react";

import HeaderBar from './HeaderBar';
import FilterButton from './FilterButton';
import PropertyListing from './PropertyListing';
import PropertyListingContainer from './PropertyListingContainer';


function App() {
  const [properties, setProperties] = useState([])

  const [category, setCategory] = useState("All");

  const [searchInput, setSearchInput] = useState("")

  const [sortHighLow, setSortHighLow] = useState(false)
  const [sortLowHigh, setSortLowHigh] = useState(false)

  function sortHandleHighLow(){
    setSortHighLow((prevState) => !prevState)
    setSortLowHigh(false)
  }

  function sortHandleLowHigh(){
    setSortLowHigh((prevState) => !prevState) 
    setSortHighLow(false)
  }

  function helpSort(sortLowHigh, sortHighLow, property1, property2){
    if(sortLowHigh === true){
      return property1.price - property2.price
    }
    if((sortHighLow === true)){
      return property2.price - property1.price
    }
  }

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
    }

    if((selectCategory.target.alt ||selectCategory.target.childNodes[4].wholeText) === prevCategoryRef.current){
      setCategory("All")
    }

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
  (property.name.toLowerCase()).includes(searchInput.toLowerCase())).sort((property1, property2) => helpSort(sortLowHigh, sortHighLow, property1, property2))


  const houses = searchedProperties.filter(property => property.category === "House");

  const beachTropicals = searchedProperties.filter(property => property.category === "Beach/Tropical");

  const cabins = searchedProperties.filter(property => property.category === "Cabin");

  const bestPools = searchedProperties.filter(property => property.category === "Best Pools");



  function handleDelProperty(deletedProperty){
    const updatedProperties = properties.filter((property) => property.id !== deletedProperty.id);
    setProperties(updatedProperties)
  }


  const showProperties = searchedProperties.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      />
    )
  })

  const showHouses = houses.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      />
    )
  })

  const showBeachTropicals = beachTropicals.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      />
    )
  })

  const showCabins = cabins.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      />
    )
  })

  const showBestPools = bestPools.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      />
    )
  })


  function displayItems(){
    if(category === "All"){
      return showProperties
    }

    if(category === " House"){
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

      <HeaderBar 
      propertySearch={propertySearch} 
      handleCategoryChange={handleCategoryChange} 
      properties={properties} 
      setProperties={setProperties}/>

      <PropertyListingContainer 
      displayItems={displayItems}
      />

      <FilterButton 
      sortHighLow={sortHighLow} 
      sortLowHigh={sortLowHigh} 
      sortHandleHighLow={sortHandleHighLow} 
      sortHandleLowHigh={sortHandleLowHigh}/>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
