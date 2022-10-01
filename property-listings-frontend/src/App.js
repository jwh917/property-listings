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

 

      <div className="headerBar">
        <div className="headerBarGrid">
          
          <div style={{"marginTop" : "-95px"}} >
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

        {showForm ? <PropertyListingForm /> : null}


        <div className="categoryBar">
          <div className="categoryBarGrid">
            <button> <img className="categoryBarImg" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="House" /> <br></br> House</button>
            <button> <img className="categoryBarImg" src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="Beach/Tropical" /> <br></br> Beach/Tropical</button>
            <button> <img className="categoryBarImg" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="Cabin" /> <br></br> Cabin</button>
            <button> <img className="categoryBarImg" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="Best Pools" /> <br></br> Best Pools</button>
          </div>
        </div>

     

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
