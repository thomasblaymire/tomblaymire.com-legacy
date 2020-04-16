import react from 'react';
import styled from 'styled-components'

export const StyledButton = styled.button`
  color: ${props => props.primaryColor};
  background-color: ${props => props.bgColor || "#eee"};
  border: 2px solid ${props => props.borderColor};
  border-radius: ${props => props.borderRadius || "5px"};
  font-family: ${props => props.theme.fontPrimary};
  font-size: ${props => props.btnFontSize || "1.7rem"};
  padding: 10px 30px;
  cursor: pointer;
  width: 200px;
  outline: none;

  &:hover {
    background-color: ${props => props.hoverBg};
    color: ${props => props.hoverColor};
    border: 2px solid ${props => props.hoverBg};
  }
`;