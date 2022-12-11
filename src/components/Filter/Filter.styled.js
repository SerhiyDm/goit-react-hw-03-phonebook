import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  line-height: 35px;
  font-size: 24px;
  color: #757575;
  cursor: pointer;
`;

export const InputStyled = styled.input.attrs(p => ({
  name: 'filter',
  type: 'text',
  value: p.value,
}))`
  padding: 7px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  font-size: 18px;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
