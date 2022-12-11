import styled from 'styled-components';

export const ButtonStyled = styled.button.attrs({ type: 'button' })`
  padding: 0 10px;
  height: 1.1em;
  margin-left: 10px;
  background-color: #f1f1f1;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px rgb(0, 0, 0);
  -webkit-box-shadow: 0px 0px 2px 0px rgb(0, 0, 0);
  -moz-box-shadow: 0px 0px 2px 0px rgb(0, 0, 0);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #353535;
  &:hover {
    background-color: #f3f3f3;
  }

  &:active {
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
