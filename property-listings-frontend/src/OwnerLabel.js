import React from "react";

function OwnerLabel({owners}) {


  return (
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
  );
}

export default OwnerLabel;