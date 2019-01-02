import PageHero from '../components/PageHero';
import Header from '../components/Header';
import PageContent from '../components/styles/PageStyles';
import Footer from '../components/Footer';
import portfolioHero from '../static/portfolio-hero.jpg';

import styled from 'styled-components';

const PortfolioFullWrapper = styled.div`
	margin-top: 5rem;
`;

const PortfolioFull = () => {
	return (
		<div>
			<PageHero image={portfolioHero} pageName="Portfolio" description="View my projects.">
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<PortfolioFullWrapper />
				</div>
				<Footer />
			</PageContent>
		</div>
	);
};

export default PortfolioFull;
