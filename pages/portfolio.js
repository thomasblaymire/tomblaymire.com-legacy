import PageHero from '../components/PageHero';
import Header from '../components/Header';
import PageContent from '../components/styles/PageStyles';

import Footer from '../components/Footer';
import portfolioHero from '../static/portfolio-hero.jpg';
import PortfolioList from '../components/Portfolio/PortfolioList';

import styled from 'styled-components';

const PortfolioWrapper = styled.div`
	margin-top: 5rem;
	& > * {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
		grid-gap: 6rem;
	}
`;

const Portfolio = () => {
	return (
		<div>
			<PageHero image={portfolioHero} pageName="Portfolio" description="View my projects.">
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
