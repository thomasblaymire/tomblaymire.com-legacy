import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/styles/PortfolioStyles';
import PageContent from '../components/styles/PageStyles';
import portfolioHero from '../static/about-hero.jpg';
import portCareers from '../static/port-careers.jpg';
import careersMap from '../static/careers-map.png';
import careersPerf from '../static/careers-performance.png';
import careersAbout from '../static/Careers-About.jpg';

const PortfolioCareers = () => {
	return (
		<div>
			<PageHero
				image={portfolioHero}
				pageName="Hermes Careers"
				description="A new recruitment site to increase business awareness and job applications. "
			>
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<Portfolio>
						<div class="row">
							<img src={portCareers} class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h3 class="heading">Project Requirements</h3>
								<p class="description">
									Hermes required a new careers website to give potential candidates an insight into the business along
									with the ability for them to easily track and apply for opportunites online.
								</p>
								<p className="description">
									The website required a strong SEO presence, fully featured blog and responsive design.
								</p>
							</div>
						</div>
						<div class="row">
							<img src={careersMap} class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h3 class="heading">Locations Map</h3>
								<p class="description">
									A primary requirement of the app was to include an interactive map so that applicants can easily find
									new roles via thier location.
								</p>
								<p className="description">
									The map was built with Google Maps API along with a Node.JS backend to provide accurate location
									descriptions.
								</p>
							</div>
						</div>
						<div class="row">
							<img src={careersAbout} class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h3 class="heading">Technology Stack</h3>
								<p className="description">
									The website was built via various different components on the front end following strict design and
									accessibility guidelines.
									<ul>
										<li>Angular 2</li>
										<li>HTML5</li>
										<li>CSS3</li>
										<li>Google Maps API</li>
										<li>SCSS</li>
										<li>Jasmine</li>
									</ul>
								</p>
							</div>
						</div>
						<div class="row">
							<img src={careersPerf} class="screenshot" alt="Screenshot 1" />
							<div class="content">
								<h3 class="heading">Performance & Accessibility</h3>
								<p class="description">
									Prior to the project I created a performance budget with the idea to limit the ammount of resources
									loaded on the page. Final performance score was B+.
								</p>
								<p class="description">
									<a href="http://careers.hermes-europe.co.uk/#/">Live URL</a>
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

export default PortfolioCareers;
