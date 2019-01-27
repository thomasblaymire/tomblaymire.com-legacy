import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/styles/PortfolioStyles';
import PageContent from '../components/styles/PageStyles';
import aboutHero from '../static/about-hero.jpg';
import gpwsImage from '../static/port-gpws.jpg';
import gpwsImageTwo from '../static/practice1.jpg';

const PortfolioGpws = () => {
	return (
		<div>
			<PageHero
				image={aboutHero}
				pageName="GP Web Solutios"
				description="Medical Practice websites with a focus on accessibility and performance."
			>
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<Portfolio>
						<div class="row">
							<img src={gpwsImage} class="screenshot" alt="Sales Website" />
							<div class="content">
								<h3 class="heading">Sales Website</h3>
								<p class="description">
									I was heavily involved with the creation of the main sales webste with the primary goal to increase
									sales and allow for customers to easily get in touch for enquiries and support queries.{' '}
								</p>
							</div>
						</div>
						<div class="row">
							<img src={gpwsImageTwo} class="screenshot" alt="Client Websties" />
							<div class="content">
								<h3 class="heading">Client Websites</h3>
								<p class="description">
									Bespoke website creation with the ability for patients to easily order thier repeat prescriptions and
									book appointments online via their local practice website.
								</p>
								<p class="description">
									Websites were built with accessibility as a first priority due to patients with various disabilities
									and adhered to WCAG 2.0 guidelines.
								</p>
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
