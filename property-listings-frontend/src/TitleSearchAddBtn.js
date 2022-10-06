import React from "react";

function TitleSearchAddBtn({showForm, showFormHandle, propertySearch}) {

  return (
    <div>
      <h1>Property Listing 🏘</h1>
      <div className="search-box">
        <input type="text" className="input-search" placeholder="🔎" onChange={propertySearch}></input>
      </div>

      <div className="buttonContainer">
            
        {showForm ? <button onClick={showFormHandle}>Close <br></br> ❌ </button> : <button onClick={showFormHandle}>Add New Property <br></br> 🏡 </button>}

      </div>
    </div>
  );
}

export default TitleSearchAddBtn;