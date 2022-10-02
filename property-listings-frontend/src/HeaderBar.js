import React, { useState } from "react";

import HouseIcon from './HouseIcon';
import TitleSearchAddBtn from './TitleSearchAddBtn';
import MenuIcon from './MenuIcon';

import PropertyListingForm from "./PropertyListingForm";
import CategoryBar from './CategoryBar';

function HeaderBar({propertySearch}) {

  const [showForm, setShowForm] = useState(false);


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }



  return (
    <div className="headerBar">
      <div className="headerBarGrid">

        <HouseIcon />

        <TitleSearchAddBtn showForm={showForm} handleClick={handleClick} propertySearch={propertySearch}/>
        
        <MenuIcon />

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