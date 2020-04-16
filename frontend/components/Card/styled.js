import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledCard = styled.div`
  width: 100%;

  .seperator {
    margin: 27px 0px;
  }
`;

export const StyledCardIcon = styled(SVG)`
  fill: #3eaca8;
  &:hover {
    transition: all 0.2s ease-in-out;
    fill: ${(props) => props.theme.black};
  }
`;

export const StyledCardTitle = styled.h2`
  color: ${(props) => props.theme.greyDark};
`;

export const StyledCardSeperator = styled.div`
  width: 20%;
  height: 2px;
  background-color: ${(props) => props.theme.greyDark};
  display: block;
  margin-bottom: 27px;
  content: '';
`;

export const StyledCardText = styled.span`
  line-height: 30px;
  color: ${(props) => props.theme.grey};
  font-family: ${(props) => props.theme.fontSecondary};
  font-size: 1.8rem;
`;
