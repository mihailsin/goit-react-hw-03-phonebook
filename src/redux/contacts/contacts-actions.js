import ADD from './contacts-types';

const addContact = contact => {
  return {
    type: ADD,
    payload: contact,
  };
};

export default addContact;
