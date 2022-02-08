import propTypes from 'prop-types';
import { ImBin2 } from 'react-icons/im';
import { connect } from 'react-redux';

import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ deleteHandler, items }) => {
  return (
    <List>
      {items.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name} : {number}
            <Button
              onClick={() => {
                deleteHandler(id);
              }}
              type="button"
            >
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
  const { items } = state.contacts;
  return { items: items };
};
export default connect(mapStateToProps)(ContactList);
