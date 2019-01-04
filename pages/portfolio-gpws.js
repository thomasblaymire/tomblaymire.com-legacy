import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/styles/PortfolioStyles';
import PageContent from '../components/styles/PageStyles';
import aboutHero from '../static/about-hero.jpg';

const PortfolioGpws = () => {
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
							<img class="screenshot" alt="Sales Website" />
							<div class="content">
								<h4 class="sub-heading">Sales Website</h4>
								<p class="description">I was heavily involved with the creation of the main sales webste with the primary goal to increase sales and allow for customers to easily get in touch for business enquiries and support queries. </p>
							</div>
						</div>
						<div class="row">
							<img class="screenshot" alt="Client Websties" />
							<div class="content">
								<h4 class="sub-heading">Client Websites</h4>
								<p class="description">Bespoke website creation with the ability for patients to easily order thier repeat prescriptions and book appointments online via their local practice website.</p>
								<p class="description">Websites were built with accessibility as a first priority and adheared to WCAG 2.0 guidelines.</p>
							</div>
						</div>
						<div class="row">
							<img class="screenshot" alt="Technology Stack" />
							<div class="content">
								<h4 class="sub-heading">Technology Stack</h4>
								<p class="description">Depeneding on the scale, size and requirments of projects an appropriate technology stack including the below technologies was used:</p>
								<ul>
									<li>Angular JS</li>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JavaScript</li>
									<li>Wordpress</li>
									<li>Jasmine</li>
								</ul>
							</div>
						</div>
					</Portfolio>
				</div>
				<Footer />
			</PageContent>
		</div>
	);
};

export default PortfolioGpws;
