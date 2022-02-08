import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

import './App.css';
import { Grid, GridContainer } from './App.styled';

class App extends React.Component {
  // state = {
  //   contacts: [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // filterInputHandler = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getContactNames = () => {
  //   return this.state.contacts.map(contact => contact.name.toLowerCase());
  // };

  // handleSubmittedData = contact => {
  //   const existingNames = this.getContactNames();

  //   if (existingNames.includes(contact.name.toLowerCase())) {
  //     alert(`${contact.name} is already in contacts`);
  //   } else {
  //     this.setState(prevState => ({
  //       contacts: [contact, ...prevState.contacts],
  //     }));
  //   }
  // };

  // filterContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedContacts = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedContacts),
  //   );
  // };

  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(savedContacts);
  //   if (parsedContacts) { this.setState({ contacts: parsedContacts }) }

  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  render() {
    console.log('App render');
    return (
      <Grid>
        <GridContainer>
          <h1>Phonebook</h1>
          <ContactForm />
        </GridContainer>

        <GridContainer>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </GridContainer>
      </Grid>
    );
  }
}

// const mapStateToProps = state => {
//   const { items } = state.contacts;
//   return { items: items };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     handleSubmit: contact => dispatch(addContact(contact)),
//   };
// };

export default connect()(App);
