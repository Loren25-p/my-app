import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const cash = useSelector((state) => state.cash);
  const dispatch = useDispatch();

  console.log(cash);

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
        <h1>Баланс: {cash} ₿</h1>
        <div className="buttons">
          <button onClick={addCash}>Положить BTC</button>
          <button onClick={getCash}>Снять BTC</button>
        </div>
      </div>
    </div>
  );
}

export default App;
