import PageHero from "../components/PageHero";
import Header from "../components/Header";
import PageContent from "../components/styles/PageStyles";
import Footer from "../components/Footer";
import portfolioHero from "../static/portfolio-hero.jpg";
import PortfolioList from "../components/Portfolio/PortfolioList";

import styled from "styled-components";

const PortfolioWrapper = styled.div`
  margin: 0;
  & > * {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 0rem;
    justify-content: center;

    @media (min-width: 480px) {
      grid-gap: 5rem;
    }
  }

  @media (min-width: 480px) {
    margin: 7rem 0rem;
  }
`;

const Portfolio = () => {
  return (
    <div>
      <PageHero
        image={portfolioHero}
        pageName="Portfolio"
        description="View my past projects and recent work."
      >
        <Header />
      </PageHero>
      <PageContent>
        <div className="container">
          <PortfolioWrapper>
            <PortfolioList amount={6} />
          </PortfolioWrapper>
        </div>
        <Footer />
      </PageContent>
    </div>
  );
};

export default Portfolio;
