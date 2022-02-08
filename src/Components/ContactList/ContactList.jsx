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

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  return {
    items: items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
