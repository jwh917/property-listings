import React, { useState } from "react";

function FilterButton() {

  const [changeBtn, setChangeBtn] = useState(false);

  function handleFilterBtn() {
    setChangeBtn((changeBtn) => !changeBtn);
  }

  return (
    <div className="filterGrid">

      {changeBtn ? <button onClick={handleFilterBtn} className="filterButton">Filter Price ⬆️</button> : <button onClick={handleFilterBtn} className="filterButton">Filter Price ⬇️</button>}

    </div>
  );
}

export default FilterButton;