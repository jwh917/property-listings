import React from "react";

function TitleSearchAddBtn({showForm, handleClick}) {

  return (
    <div>
      <h1>Property Listing 🏘</h1>
      <div className="search-box">
        <input type="text" className="input-search" placeholder="🔎"></input>
      </div>

      <div className="buttonContainer">
            
        {showForm ? <button onClick={handleClick}>Close <br></br> ❌ </button> : <button onClick={handleClick}>Add New Property <br></br> 🏡 </button>}

      </div>
    </div>
  );
}

export default TitleSearchAddBtn;