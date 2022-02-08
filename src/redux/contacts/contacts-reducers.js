import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER } from './contacts-types';

const storageItems = localStorage.getItem('contacts');
const parsedItems = JSON.parse(storageItems);

const itemsReducer = (state = parsedItems, { type, payload }) => {
  switch (type) {
    case ADD:
      return [payload, ...state];

    case DELETE:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};
const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
