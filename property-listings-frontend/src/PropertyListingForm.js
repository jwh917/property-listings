import React from "react";
import CategoryBar from './CategoryBar';


function PropertyListingForm() {

  return (
    <div className="newPropertyFormContainer">
      <form className="newPropertyForm" >
        <h2>Create New Property!</h2>
        <input
          type="text"
          name="name"
          placeholder="Property Name..."
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
          placeholder="Image Url..."
          className="input-text"
        />

        <br></br>

        <input
        // number *make input smaller
          type="text"
          name="price"
          placeholder="Price $..."
          className="input-num"
        />

        <br></br>
        <br></br>
        <h3> Categories </h3>
        {/* Make seperate btns for form - FormButtons */}
        <CategoryBar />
        <br></br>
        <br></br>


        <input
        // number *make input smaller
          type="text"
          name="price"
          placeholder="# of Bedrooms..."
          className="input-num"
        />
        <br></br>

        <input
        // number *make input smaller
          type="text"
          name="price"
          placeholder="# of Bathrooms..."
          className="input-num"
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