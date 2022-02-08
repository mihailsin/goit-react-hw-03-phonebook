const addContact = contact => {
  return {
    type: 'contact/add',
    payload: contact,
  };
};

export default addContact;
