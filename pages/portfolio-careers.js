import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/styles/PortfolioStyles';
import PageContent from '../components/styles/PageStyles';
import portfolioHero from '../static/about-hero.jpg';
import portCareers from '../static/port-careers.jpg';

const PortfolioCareers = () => {
	return (
		<div>
			<PageHero image={portfolioHero} pageName="Hermes Careers">
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<div className="heading">Hermes Careers</div>
					<Portfolio>
						<div class="row">
							<img src={portCareers} class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h3 class="heading">Project Requirements</h3>
								<p class="description">
									Hermes required a new careers website to give potential candidates and overview of what it is like to work in the business along with the ability to easily track and apply for opportunites within the business.
								</p>
								<p className="description">
									The site needed to have a strong SEO presence along with a fully featured blog, awards and job locations pages.
								</p>
							</div>
						</div>
						<div class="row">
							<img class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h4 class="sub-heading">Locations Map</h4>
								<p class="description">A primary part of the app was to display roles throughout the UK. The feature was built using Google Maps API with a Node.js backend to serve different locations with styling to clearly display the differences between (Head Office, Depot and Hub) positions available.</p>
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
