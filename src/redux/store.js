import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveState } from '../localStorage/localStorage';
import contactsReducer from './contacts/contacts-reducers';
import throttle from 'lodash.throttle';
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
store.subscribe(
  throttle(() => {
    console.log('localStorageSubscriber invoked');
    saveState(store.getState().contacts.items);
  }, 1000),
);

export default store;
