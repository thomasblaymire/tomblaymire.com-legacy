import styled from 'styled-components';
import heroImage from '../../static/me.jpg';

export const StyledHero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  min-height: 80vh;
  height: auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  position: relative;
  background-position-x: -500px;

  @media (min-width: 480px) {
    min-height: 100vh;
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
  position: relative;

  top: 10rem;

  @media (min-width: 480px) {
    width: 60%;
  }

  .intro {
    font-size: 7vmin;
    margin: 0;
  }

  .description {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 300;
    @media (min-width: 480px) {
      line-height: 4.5rem;
      font-size: 3.3vmin;
      font-weight: 300;
      min-width: 80%;
    }
  }
`;

export const StyledButtonBlock = styled.div`
  margin-top: 8rem;
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
