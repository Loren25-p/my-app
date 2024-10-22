const initialState = {
  cash: 0, // Начальное состояние
};

export const cashReducer = (store = initialState, action) => { // Задано значение по умолчанию
  switch (action.type) {
    case "ADD_CASH":
      return {
        ...store,
        cash: store.cash + action.payload, // Добавляем деньги
      };
    case "WITHDRAW_CASH": // Обработка снятия денег
      if (store.cash >= action.payload) {
        return {
          ...store,
          cash: store.cash - action.payload, // Снимаем деньги, если их достаточно
        };
      } else {
        return store; // Если недостаточно средств, возвращаем текущее состояние
      }
    default:
      return store; // Возвращаем текущее состояние для любых других действий
  }
};
export default cashReducer