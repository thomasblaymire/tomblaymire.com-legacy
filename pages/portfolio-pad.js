import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/styles/PortfolioStyles';
import PageContent from '../components/styles/PageStyles';
import aboutHero from '../static/about-hero.jpg';
import portfolioPad from '../static/port-pad.jpg';

const PortfolioPad = () => {
	return (
		<div>
			<PageHero image={aboutHero} pageName="Product Analysis Dashbaord">
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<Portfolio>
						<div class="row">
							<img src={portfolioPad} class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h3 class="heading">Project Requirements</h3>
								<p class="description">
									Hermes Innovation required a new website to help develop their brand awareness and gather project
									feedback with the community.
								</p>
								<p className="description">
									I built the entire new front-end from scratch whilst working alongside designers, testers and project
									managers.
								</p>
							</div>
						</div>
						<div class="row">
							<img src={portfolioPad} class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h3 class="heading">Project Requirements</h3>
								<p class="description">
									Hermes Innovation required a new website to help develop their brand awareness and gather project
									feedback with the community.
								</p>
								<p className="description">
									I built the entire new front-end from scratch whilst working alongside designers, testers and project
									managers.
								</p>
							</div>
						</div>
						<div class="row">
							<img src={portfolioPad} class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h3 class="heading">Project Requirements</h3>
								<p class="description">
									Hermes Innovation required a new website to help develop their brand awareness and gather project
									feedback with the community.
								</p>
								<p className="description">
									I built the entire new front-end from scratch whilst working alongside designers, testers and project
									managers.
								</p>
							</div>
						</div>
					</Portfolio>
				</div>
				<Footer />
			</PageContent>
		</div>
	);
};

export default PortfolioPad;
