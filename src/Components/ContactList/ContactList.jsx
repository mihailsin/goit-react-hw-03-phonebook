import propTypes from 'prop-types';
import { ImBin2 } from 'react-icons/im';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ deleteContact, items }) => {
  return (
    <List>
      {items.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name} : {number}
            <Button onClick={() => deleteContact(id)} type="button">
              <ImBin2 />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  items: propTypes.array.isRequired,
};

const filteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  return {
    items: filteredContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
