import { createStore } from 'redux';
import cashReducer from './cashReducer';

// Создание хранилища с редьюсером
export const store = createStore(cashReducer);
export default store