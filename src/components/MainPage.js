import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Balance from "./Balance";
import CashButtons from "./CashButtons";
import "./App.css";

const MainPage = () => {
  const cash = useSelector((state) => state.cash);
  const dispatch = useDispatch();

  const addCash = () => {
    const amount = prompt("Введите сумму для пополнения:");
    if (amount && Number(amount) > 0) {
      dispatch({ type: "ADD_CASH", payload: Number(amount) });
    } else {
      alert("Пожалуйста, введите корректную сумму!");
    }
  };

  const getCash = () => {
    const amount = prompt("Введите сумму для снятия:");
    if (amount && Number(amount) > 0) {
      dispatch({ type: "WITHDRAW_CASH", payload: Number(amount) });
    } else {
      alert("Пожалуйста, введите корректную сумму!");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Balance cash={cash} />
        <CashButtons addCash={addCash} getCash={getCash} />
      </div>
    </div>
  );
};

export default MainPage;
