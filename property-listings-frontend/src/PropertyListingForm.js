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

        <br></br>

        <input
          type="text"
          name="location"
          placeholder="Location..."
          className="input-text"
        />

        <br></br>

        <input
          type="text"
          name="images"
          placeholder="Image URLs..."
          className="input-text"
        />

        <br></br>

        <input
        // number
          type="text"
          name="price"
          placeholder="Price $..."
          className="input-text"
        />

        <br></br>
        <br></br>


        <button> Categories </button>
        <br></br>
        <br></br>


        <button> Types </button>
        <br></br>
        <br></br>


        <input
        // number
          type="text"
          name="price"
          placeholder="# of Bedrooms..."
          className="input-text"
        />
        <br></br>

        <input
        // number
          type="text"
          name="price"
          placeholder="# of Bathrooms..."
          className="input-text"
        />
        <br></br>
        <br></br>


        <input
          type="submit"
          name="submit"
          value="Create New Property"
          className="submit"
        />


      </form>
    </div>
  );
}

export default PropertyListingForm;