import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/add':
      return {
        ...state,
        contacts: {
          items: [action.payload, ...state.contacts.items],
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
