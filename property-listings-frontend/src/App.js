import './App.css';
import React from "react";

import HeaderBar from './HeaderBar';
import FilterButton from './FilterButton';


function App() {

  return (
    <div className="App">

      <HeaderBar />


      {/* Example Data */}
      <div className="headerBar">
        <div className="headerBarGrid">


          <div> 
            <img style={{"width" : "250px", "height" : "250px"}} src="https://a0.muscache.com/im/pictures/1665b898-8cff-4bdf-aba1-c94210351352.jpg?im_w=960" alt="cabin_pic" />

            <h3>Morris Cabin</h3>
            <h5>Albany, NY</h5>
            <h4>$478,094</h4>

            <img className="categoryBarImg" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="Cabin" />

            <h6>4 Bedrooms</h6>
            <h6>2 Bathrooms</h6>
            🗑 | ✍🏼
          </div>


          <div>
            <img style={{"width" : "250px", "height" : "250px"}} src="https://a0.muscache.com/im/pictures/4de4712a-f9a8-4883-ba40-718155ed37eb.jpg?im_w=960" alt="pool_pic" />

            <h3>Luci's Villa</h3>
            <h5>Port Jeff, CA</h5>
            <h4>$1,030,256</h4>

            <img className="categoryBarImg" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="Best Pools" />

            <h6>5 Bedrooms</h6>
            <h6>3 Bathrooms</h6>
            🗑 | ✍🏼

          </div>

          <div>
            <img style={{"width" : "250px", "height" : "250px"}} src="https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg?im_w=960" alt="house_pic" />

            <h3>Wonder In The Woods</h3>
            <h5>Pinchot, WA</h5>
            <h4>$530,000</h4>

            <img className="categoryBarImg" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="House" />

            <h6>2 Bedrooms</h6>
            <h6>1 Bathrooms</h6>
            🗑 | ✍🏼

          </div>

          <div>
            <img style={{"width" : "250px", "height" : "250px"}} src="https://a0.muscache.com/im/pictures/miso/Hosting-49629092/original/affba2c4-fcf0-4c42-a01e-012a936ccb1d.jpeg?im_w=960" alt="beach_pic" />

            <h3>Rocko's Point</h3>
            <h5>Miami, FL</h5>
            <h4>$740,639</h4>

            <img className="categoryBarImg" src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="Beach/Tropical" />

            <h6>3 Bedrooms</h6>
            <h6>1 Bathrooms</h6>
            🗑 | ✍🏼

          </div>

        </div>
      </div>

      



      <FilterButton />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
 
     {/* 1 HeaderBar */}
        {/* ThreeDHouse  */}
        {/* SearchBarButton */}
        {/* CreateListingButton */}
        {/* Menu */}
      {/* 2 PropertyListingForm */}
      {/* 3 CategoryBar  */}
      {/* 4 FilterButton */}
      {/* 5 ListingsContainer */}

    </div>
  );
}

export default App;
