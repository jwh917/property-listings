import './App.css';
import React, { useState } from "react";

import PropertyListingForm from "./PropertyListingForm";
import CategoryBar from './CategoryBar';


function App() {

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  return (
    <div className="App">

 

      <div className="headerBar">
        <div className="headerBarGrid">
          
          <div style={{"marginTop" : "-85px"}} >
            <h2 style={{"fontSize" : "100px", "border": "1px solid black"}}>🏘</h2>
          </div>

          <div>
            <h1>Property Listing 🏘</h1>
            <div className="search-box">
              <input type="text" className="input-search" placeholder="🔎"></input>
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

        {showForm ? <PropertyListingForm /> : <CategoryBar />
                
        }

        <hr className="hr"></hr>


        {/* filter button remains at the bottom of the page as you scroll thru properties  */}

        <br></br>
        <br></br>
      </div>
        

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
