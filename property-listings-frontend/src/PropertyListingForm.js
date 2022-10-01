import React from "react";

function PropertyListingForm() {

  return (
    <div className="newPropertyFormContainer">
      <form className="newPropertyForm" >
        <h3>Create a New Property!</h3>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="input-text"
        />

      </form>
    </div>
  );
}

export default PropertyListingForm;