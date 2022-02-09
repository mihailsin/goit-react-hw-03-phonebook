import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { Label, Input, Wrapper } from '../ContactForm/ContactForm.styled';
const Filter = ({ value, inputHandler }) => {
  const filterInputId = nanoid(7);

  return (
    <Wrapper>
      <Label htmlFor={filterInputId}>Filter</Label>
      <Input
        onChange={inputHandler}
        value={value}
        id={filterInputId}
        type="text"
        name="filter"
        required
      />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: propTypes.string,
  inputHandler: propTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { value: state.contacts.filter };
};
const mapDispatchToProps = dispatch => {
  return { inputHandler: e => dispatch(filterContacts(e.target.value)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
