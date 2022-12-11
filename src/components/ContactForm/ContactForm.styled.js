import styled from 'styled-components';

export const FormStyled = styled.form.attrs({ autocomplete: 'off' })`
  width: 30vw;
  padding: 20px 10px;
  display: inline-flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
`;
