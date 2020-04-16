import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  & > div {
    width: 100%;
    height: 200px;
    -webkit-flex-flow: wrap row;
    flex-flow: wrap row;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 480px) {
      height: 350px;
    }
  }

  @media (min-width: 480px) {
    flex-direction: row;
  }

  .heading {
    font-family: ${(props) => props.theme.fontPrimary};
    letter-spacing: -0.02em;
    font-weight: 700;
    font-style: normal;
    color: #2a363b;
    font-size: 3.7rem;
    margin: 0;
    padding-bottom: 1rem;
  }
`;

export const GetInTouch = styled.div`
  background-color: #e5eec1;
`;

export const Facebook = styled.div`
  background-color: #a0d5aa;
`;

export const Twitter = styled.div`
  background-color: #537a83;
`;

export const Linkedin = styled.div`
  background-color: #2a363b;
`;

export const SocialIcon = styled.div`
  text-align: center;
  svg {
    fill: #fff;
    width: 27%;

    &:hover {
      cursor: pointer;
      fill: ${(props) => props.theme.black};
    }
  }
`;
