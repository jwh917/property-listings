import React, { useState } from "react";

import HouseIcon from './HouseIcon';
import TitleSearchAddBtn from './TitleSearchAddBtn';

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

        <HouseIcon />

        <TitleSearchAddBtn showForm={showForm} handleClick={handleClick}/>
        
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