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

  const [owners, setOwners] = useState([])

  const [ownerActive, setOwnerActive] = useState(0)


  useEffect(() => {
    // fetch("http://localhost:3000/properties")
    fetch("http://localhost:9292/properties")
      .then((r) => r.json())
      .then((propertiesData) => 
      setProperties(propertiesData)
      );

  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/owners")
      .then((r) => r.json())
      .then((ownersData) => 
      setOwners(ownersData)
      );

  }, []);

  const prevCategoryRef = useRef();
  const prevOwnerRef = useRef();

  useEffect(() => {
    prevCategoryRef.current = category;    
    prevOwnerRef.current = ownerActive;    
  }, [category, ownerActive]);


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


  const searchedProperties = properties.filter((property) => 
  (property.name.toLowerCase()).includes(searchInput.toLowerCase())).sort((property1, property2) => helpSort(sortLowHigh, sortHighLow, property1, property2))

// remove later!!!!!!!!!!********
// eslint-disable-next-line 
  const finalProperties = searchedProperties.filter((property) => {
    if (property.owner_id === ownerActive){
      return property
    }
    else if (ownerActive === 0){
      return properties
    }
  })
  

  const houses = finalProperties.filter(property => property.category === "House");

  const beachTropicals = finalProperties.filter(property => property.category === "Beach/Tropical");

  const cabins = finalProperties.filter(property => property.category === "Cabin");

  const bestPools = finalProperties.filter(property => property.category === "Best Pools");

  function handleDelProperty(deletedProperty){
    const updatedProperties = properties.filter((property) => property.id !== deletedProperty.id);
    setProperties(updatedProperties)
  }


  const showProperties = finalProperties.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      owners={owners}
      />
    )
  })

  const showHouses = houses.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      owners={owners}
      />
    )
  })

  const showBeachTropicals = beachTropicals.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      owners={owners}
      />
    )
  })

  const showCabins = cabins.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      owners={owners}
      />
    )
  })

  const showBestPools = bestPools.map((property) => {
    return(
      <PropertyListing
      key={property.name}
      property={property}
      handleDelProperty={handleDelProperty}
      owners={owners}
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
      setProperties={setProperties}
      ownerActive={ownerActive}
      setOwnerActive={setOwnerActive}
      prevOwnerRef={prevOwnerRef}
      owners={owners}
      setOwners={setOwners}/>

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
