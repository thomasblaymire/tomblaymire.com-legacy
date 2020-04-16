import styled from 'styled-components';
import heroImage from '../../static/me.jpg';
import stock from '../../static/stock.jpg';

export const StyledHero = styled.div`
  background-image: url(${stock});
  background-size: cover;
  min-height: 30vh;
  height: auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  position: relative;
  background-position-x: -500px;

  @media (min-width: 480px) {
    min-height: 80vh;
    background-position-x: center;
  }
`;

export const StyledHeroWrapper = styled.div`
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 15px;
`;

export const StyledHeroContent = styled.div`
  color: ${(props) => props.theme.white};
  width: 100%;
  padding: 21rem 0 25rem 0;
  line-height: 20px;
  @media (min-width: 480px) {
    width: 60%;
  }
`;

export const StyledHeroTitle = styled.h2`
  font-size: 6rem;
`;

export const StyledHeroText = styled.p`
  font-size: 2.2rem;
  line-height: 3.5em;
  font-weight: 300;
  padding-bottom: 5rem;
  @media (min-width: 480px) {
    line-height: 1.5em;
    font-weight: 300;
    min-width: 80%;
  }
`;

export const StyledButtonBlock = styled.div`
  display: flex;

  & > button {
    margin-right: 1.8rem;
  }

  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-weight: normal;
    &:hover {
      color: red;
    }
  }
`;
