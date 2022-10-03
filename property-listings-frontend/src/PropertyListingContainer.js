import React from "react";

function PropertyListingContainer({displayItems}) {

  return (
    <div className="propertyListingContainer">
      <div className="propertyListingGrid">

        {displayItems()}

      </div>
   </div>
  );
}

export default PropertyListingContainer;