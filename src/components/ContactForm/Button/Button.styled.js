import styled from 'styled-components';

export const ButtonStyled = styled.button.attrs({ type: 'submit' })`
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  font-weight: 500;
  color: #757575;
  &:hover {
    background-color: #f3f3f3;
  }

  &:active {
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
