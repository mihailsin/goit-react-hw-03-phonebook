import { ADD, DELETE, FILTER } from './contacts-types';

const addContact = contact => {
  return {
    type: ADD,
    payload: contact,
  };
};

const deleteContact = id => {
  return {
    type: DELETE,
    payload: id,
  };
};

const filterContacts = value => {
  return {
    type: FILTER,
    payload: value,
  };
};

export { addContact, deleteContact, filterContacts };
