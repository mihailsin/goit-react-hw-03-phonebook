import { combineReducers } from 'redux';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'contact/add':
      console.log(state);
      return [payload, ...state];

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  return state;
};
const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
