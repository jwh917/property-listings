import React, { useState } from "react";

import PropertyListingForm from "./PropertyListingForm";
import CategoryBar from './CategoryBar';

function HeaderBar() {

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div className="headerBar">
      <div className="headerBarGrid">
        
        {/* HouseIcon */}
        {/* Add Contact Info */}
        <div style={{"marginTop" : "-85px"}} >
          <h2 style={{"fontSize" : "100px", "border": "1px solid black"}}>🏘</h2>
        </div>

        {/* TitleSearchAddBtn*/}
        <div>
          <h1>Property Listing 🏘</h1>
          <div className="search-box">
            <input type="text" className="input-search" placeholder="🔎"></input>
          </div>
          <div className="buttonContainer">
            
            {showForm ?<button onClick={handleClick}>Close <br></br> ❌ </button> : <button onClick={handleClick}>Add New Property <br></br> 🏡 </button>}

          </div>
        </div>
        
        {/* MenuIcon */}
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


      <br></br>
      <br></br>
  </div>
  );
}

export default HeaderBar;