import PropTypes from 'prop-types';
import { ButtonStyled } from './ContactsItem.styled';

export const ContactsItem = ({ name, number, id, handleClick }) => (
  <li style={{ lineHeight: '45px' }}>
    {name}: {number}{' '}
    <ButtonStyled onClick={() => handleClick(id)}>Delete</ButtonStyled>
  </li>
);

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
