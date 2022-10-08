import React, {useState, useEffect} from "react";
import NewOwnerForm from './NewOwnerForm';
import OwnerLabel from './OwnerLabel';


function MenuIcon({setOwnerActive, prevOwnerRef}) {

  const [owners, setOwners] = useState([])

  const [newOwner, setNewOwner] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/owners")
      .then((r) => r.json())
      .then((ownersData) => 
      setOwners(ownersData)
      );

  }, []);

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
    // class for border
    <div style={{"width": "70px", "height":"70px", "border": "1px solid black"}}>
      <div id="mySidenav" className="sidenav">

        {/* class for x *close btn */}
        <p style={{"cursor": "pointer"}} className="closebtn" onClick={closeNav}>x</p>
        <br></br>

        <NewOwnerForm formOwnerSumbit={formOwnerSumbit} handleNewOwner={handleNewOwner}/>

        <hr className="hr"></hr>

        <h2>Owners</h2>

        {ownersLabels}


      </div>

      <span style={{"fontSize":"50px", "cursor": "pointer"}} onClick={openNav}>&#9776;</span>

    </div>




  );
}

export default MenuIcon;