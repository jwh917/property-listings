import React, {useState} from "react";
import NewOwnerForm from './NewOwnerForm';
import OwnerLabel from './OwnerLabel';


function MenuIcon({setOwnerActive, prevOwnerRef, owners, setOwners}) {


  const [newOwner, setNewOwner] = useState("")

  function handleNewOwner(event){ 
    setNewOwner(event.target.value)
  }

  function formOwnerSumbit(event){
    event.preventDefault()

    const newestOwner = {
      name: newOwner
    }

    // create error message
    // error or window saying which ever one isnt filled
    if(newestOwner.name === "" ) return

    // fetch("http://localhost:3000/properties", {
    fetch("http://localhost:9292/owners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newestOwner),
    })
      .then((r) => r.json())
      .then((newestOwnerData) => setOwners([...owners ,newestOwnerData]));

    event.target.reset()
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function handleDeleteOwner(deletedOwner){
    const updatedOwners = owners.filter((owner) => owner.id !== deletedOwner.id);
    setOwners(updatedOwners)
  }

  const ownersLabels = owners.map((owner) => {
    return(
      <OwnerLabel key={owner.name} owner={owner} handleDeleteOwner={handleDeleteOwner} setOwnerActive={setOwnerActive} prevOwnerRef={prevOwnerRef}/>
    )
  })



  return (
    <div className="menuBorder" >
      <div id="mySidenav" className="sidenav">

        <p className="closebtn" onClick={closeNav}>x</p>
        <br></br>

        <div style={{"marginTop": "-30px"}}>
          <NewOwnerForm formOwnerSumbit={formOwnerSumbit} handleNewOwner={handleNewOwner}/>
        </div>

        <hr className="hr"></hr>
        <br></br>

       

        <div style={{"marginTop": "-30px"}}>
          <h2>Owners</h2>
          {ownersLabels}
        </div>

      </div>

      <span style={{"fontSize":"50px", "cursor": "pointer"}} onClick={openNav}>&#9776;</span>

    </div>




  );
}

export default MenuIcon;