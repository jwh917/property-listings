import React from "react";

function PropertyListingContainer({allProperties}) {

  return (
    <div className="propertyListingContainer">
      <div className="propertyListingGrid">

        {allProperties}

      </div>
   </div>
  );
}

export default PropertyListingContainer;