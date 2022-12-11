import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Filter.styled';

export const Filter = ({ handleChange, text = '', value }) => (
  <LabelStyled>
    {text}
    <InputStyled onChange={handleChange} value={value} />
  </LabelStyled>
);

Filter.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
