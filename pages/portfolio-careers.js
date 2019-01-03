import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/styles/PortfolioStyles';
import PageContent from '../components/styles/PageStyles';
import aboutHero from '../static/about-hero.jpg';

const PortfolioCareers = () => {
	return (
		<div>
			<PageHero image={aboutHero} pageName="GP Web Solutios">
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<div className="heading">GP Web Solutios</div>
					<Portfolio>
						<div class="row">
							<img src={innovationMain} class="screenshot" alt="Screenshot 1" />
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
							<img class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h4 class="sub-heading">Technology Stack</h4>
								<p class="description">Blah blah blah this is a description</p>
							</div>
						</div>
						<div class="row">
							<img class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h4 class="sub-heading">Outcomes</h4>
								<p class="description">Blah blah blah this is a description</p>
							</div>
						</div>
						<div class="row">
							<img class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h4 class="sub-heading">Performance & Accessibility</h4>
								<p class="description">Blah blah blah this is a description</p>
							</div>
						</div>
					</Portfolio>
				</div>
				<Footer />
			</PageContent>
		</div>
	);
};

export default PortfolioCareers;
