import React from "react";

function OwnerLabel({owner, handleDeleteOwner, setOwnerActive, prevOwnerRef}) {

  const {id, name} = owner


  function deleteOwner() {
    
    fetch(`http://localhost:9292/owners/${id}`, {
      
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteOwner(owner));
  }

  function handleOwnerChange(){
    setOwnerActive(id)

    if (id === prevOwnerRef.current){
      setOwnerActive(0)
    }
  }


  return (
    <div>

      {/* hover css and cursor pointer  */}
      <h3 onClick={handleOwnerChange} >
        {name} &nbsp;
        <button onClick={deleteOwner}>🗑</button>
      </h3>
      

    </div>
  );
}

export default OwnerLabel;