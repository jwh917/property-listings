import React from "react";

function NewOwnerForm({formOwnerSumbit, handleNewOwner}) {


  return (
    <div>
    <form onSubmit={formOwnerSumbit}>
      <h2> Create New Owner:</h2>

      <input
      type="text"
      name="name"
      placeholder="Owner Name..."
      className="input-text"
      style={{"width": "180px"}}
      onChange={handleNewOwner}
      />

      <br></br>

      <input
      type="submit"
      name="submit"
      value="Create New Owner"
      className="submit"
      />
    </form>
  </div>
  );
}

export default NewOwnerForm;