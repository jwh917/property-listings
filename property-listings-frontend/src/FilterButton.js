import React from "react";

function FilterButton({sortHighLow, sortLowHigh, sortHandleHighLow, sortHandleLowHigh}) {

  return (

    <div className="priceBtns">

      {sortHighLow ? 
      (<button onClick={sortHandleHighLow} id="activeButton" className="filterButton">⬆️ Price</button>) 
      : 
      (<button onClick={sortHandleHighLow} className="filterButton"> ⬆️ Price</button>)
      }

      <br></br>

      {sortLowHigh ?
      (<button onClick={sortHandleLowHigh} id="activeButton" className="filterButton">Price ⬇️</button>) 
      : 
      (<button onClick={sortHandleLowHigh} className="filterButton">Price ⬇️</button>)
      }

    </div>

  );
}

export default FilterButton;