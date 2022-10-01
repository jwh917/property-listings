import React from "react";

function CategoryBar() {

  return (
    <div className="categoryBar">
      <div className="categoryBarGrid">
        <button> <img className="categoryBarImg" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="House" /> <br></br> House</button>
        <button> <img className="categoryBarImg" src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="Beach/Tropical" /> <br></br> Beach/Tropical</button>
        <button> <img className="categoryBarImg" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="Cabin" /> <br></br> Cabin</button>
        <button> <img className="categoryBarImg" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="Best Pools" /> <br></br> Best Pools</button>
      </div>
    </div>
  );
}

export default CategoryBar;