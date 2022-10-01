import './App.css';
import React, { useState } from "react";

import PropertyListingForm from "./PropertyListingForm";


function App() {

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  return (
    <div className="App">

 

      <div className="HeaderBar">
        <div className="HeaderBarGrid">
          
          <div style={{"marginTop" : "-95px"}} >
            <h2 style={{"fontSize" : "100px", "border": "1px solid black"}}>🏘</h2>
          </div>

          <div>
            <h1>Property Listing 🏘</h1>
            <div class="search-box">
              <input type="text" class="input-search" placeholder="🔎"></input>
            </div>
            <div className="buttonContainer">
              
            {showForm ?<button onClick={handleClick}>Close <br></br> ❌ </button> : <button onClick={handleClick}>Add New Property</button>}

            </div>
          </div>

          <div>

            <div style={{"border": "1px solid black"}}>  
                <button id="hamburger-menu">
                  <nav id="sidebar-menu"></nav>
                </button>
            </div>
            
          </div>
 
        </div>

        {showForm ? <PropertyListingForm /> : null}

        <hr className="hr"></hr>

        <br></br>
        <br></br>
      </div>
        

     {/* 1 HeaderBar */}
        {/* ThreeDHouse */}
        {/* SearchBarButton */}
        {/* CreateListingButton */}
        {/* Menu */}
      {/* 2 PropertyListingForm */}
      {/* 3 SortFilterContainer */}
        {/* HousingCategoryBar  */}
        {/* FilterButton */}

      {/* 4 ListingsContainer */}

    </div>
  );
}

export default App;
