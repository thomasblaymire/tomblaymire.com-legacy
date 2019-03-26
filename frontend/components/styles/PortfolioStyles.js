import styled from "styled-components";

const PortfolioStyles = styled.div`
  margin: 0;
  padding: 5rem 0rem;
  font-size: 2rem;

  .row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-gap: 20px;
    margin-bottom: 8rem;
    align-items: center;
    @media (min-width: 480px) {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

  .screenshot {
    max-width: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.08), 0 0 4px rgba(0, 0, 0, 0.05);
  }

  .heading {
    font-family: ${props => props.theme.fontPrimary};
    letter-spacing: -0.02em;
    font-weight: 700;
    font-style: normal;
    color: #2a363b;
    font-size: 3.2rem;
    padding-bottom: 1rem;
  }

  .content {
    padding: 0;

    @media (min-width: 950px) {
      padding: 0rem 0rem 0rem 5rem;
    }

    .description {
      color: black;
      font-size: 2rem;
      font-size: 1.7rem;
      line-height: 1.5em;
      margin: 0;
      padding-bottom: 2rem;
    }

    ul {
      color: black;
      font-size: 2rem;
      font-size: 1.7rem;
      line-height: 1.5em;
    }
  }
`;

export default PortfolioStyles;
