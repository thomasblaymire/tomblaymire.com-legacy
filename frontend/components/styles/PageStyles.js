import styled from 'styled-components';

const PageStyles = styled.div`
  height: auto;
  min-height: 100vh;

  .heading {
    font-family: ${(props) => props.theme.fontPrimary};
    letter-spacing: -0.02em;
    font-weight: 700;
    font-style: normal;
    color: ${(props) => props.theme.greyDark};
    font-size: 4.2rem;
    margin: 0;
  }

  .sub-heading {
    font-family: ${(props) => props.theme.fontSecondary};
    font-size: 2rem;
    color: #474747;
    margin: 0;
    line-height: 3rem;
  }

  .container {
    max-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 15px;

    @media (min-width: 568px) {
      width: auto;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 15px;

  @media (min-width: 568px) {
    width: auto;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Heading = styled.h2`
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: -0.02em;
  font-weight: 700;
  font-style: normal;
  color: ${(props) => props.theme.greyDark};
  font-size: 4.2rem;
  margin: 0;
`;

export default PageStyles;
