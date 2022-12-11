import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const Contacts = ({ options, handleClick }) =>
  options.length !== 0 && (
    <List>
      {options.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          handleClick={handleClick}
        />
      ))}
    </List>
  );

Contacts.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};
