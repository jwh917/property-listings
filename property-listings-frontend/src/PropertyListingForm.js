import React from "react";

function PropertyListingForm({options, formCategory, propertyNameInput, locationInput, imgUrlInput, priceInput, formCategoryInput, bedroomsInput, bathroomsInput, formSumbitHandle}) {

  return (

    <div className="newPropertyFormContainer">
      <form className="newPropertyForm" onSubmit={formSumbitHandle}>
        <h2>Create New Property!</h2>
        <input
          type="text"
          name="name"
          placeholder="Property Name..."
          className="input-text"
          onChange={propertyNameInput}
        />

        <br></br>

        <input
          type="text"
          name="location"
          placeholder="Location..."
          className="input-text"
          onChange={locationInput}
        />

        <br></br>

        <input
          type="text"
          name="images"
          placeholder="Image Url..."
          className="input-text"
          onChange={imgUrlInput}
        />

        <br></br>

        <input
          type="number"
          name="price"
          placeholder="Price $..."
          className="input-num"
          onChange={priceInput}
        />
        

        <br></br>
        <br></br>

        <select className="input-text" value={formCategory} onChange={formCategoryInput}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>

        <br></br>
        <br></br>


        <input
          type="number"
          name="price"
          placeholder="# of Bedrooms..."
          className="input-num"
          onChange={bedroomsInput}
        />
        <br></br>

        <input
          type="number"
          name="price"
          placeholder="# of Bathrooms..."
          className="input-num"
          onChange={bathroomsInput}
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