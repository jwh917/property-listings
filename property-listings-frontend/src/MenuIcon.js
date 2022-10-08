import React, {useState, useEffect} from "react";

function MenuIcon() {

  const [owners, setOwners] = useState([])

  const [newOwner, setNewOwner] = useState("")

  useEffect(() => {
    // fetch("http://localhost:3000/properties")
    fetch("http://localhost:9292/owners")
      .then((r) => r.json())
      .then((ownersData) => 
      setOwners(ownersData)
      );

  }, []);

  function handleNewOwner(event){
    setNewOwner(event.target.value)
  }

  console.log(newOwner)

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



  return (
    // class for border
    <div style={{"width": "70px", "height":"70px", "border": "1px solid black"}}>
      <div id="mySidenav" className="sidenav">

        {/* class for x *close btn */}
        <p style={{"cursor": "pointer"}} className="closebtn" onClick={closeNav}>x</p>
        <br></br>

        {/* Menu Form Comp */}
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

        <hr className="hr"></hr>

        {/* Owner Label Comp */}
        <div>

          <h2>Owners</h2>

          {owners.map(owner => (
            <h3 key={owner.id}>
              {owner.name} &nbsp;
              <label className="switch">
                {/* onChange for checkbox */}
                <input type="checkbox"></input>
                <span className="slider round"></span>
              </label>
              &nbsp;
              🗑
            </h3>
          ))}

        </div>

      </div>

      <span style={{"fontSize":"50px", "cursor": "pointer"}} onClick={openNav}>&#9776;</span>

    </div>




  );
}

export default MenuIcon;