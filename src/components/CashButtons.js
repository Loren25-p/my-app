import React from "react";

const CashButtons = ({ addCash, getCash }) => {
  return (
    <div className="buttons">
      <button onClick={addCash}>Положить деньги</button>
      <button onClick={getCash}>Снять деньги</button>
    </div>
  );
};

export default CashButtons;
