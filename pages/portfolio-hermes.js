import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/styles/PortfolioStyles';
import PageContent from '../components/styles/PageStyles';
import aboutHero from '../static/about-hero.jpg';
import parcelshopFinder from '../static/parcelshop-finder.jpg';
import hermesMain from '../static/hermes-main.jpg';
import printInStore from '../static/pis.jpg';

const PortfolioHermes = () => {
	return (
		<div>
			<PageHero
				image={aboutHero}
				pageName="Hermes"
				description="The primary e-commerce website used to track, send and return parcels. "
			>
				<Header />
			</PageHero>
			<PageContent>
				<div className="container">
					<Portfolio>
						<div class="row">
							<img src={hermesMain} class="screenshot" alt="Product Analysis Homepage" />
							<div class="content">
								<h3 class="heading">E-commerce Platform</h3>
								<p class="description">
									The Hermes website was used by hundreds of thousands customers every month to track, send and return thier
									parcels.
								</p>
								<p className="description">
									The website has an large focus on usability with new features regularly A/B tested to enhance user
									experience.
								</p>
							</div>
						</div>
						<div class="row">
							<img src={parcelshopFinder} class="screenshot" alt="Product Analysis Login" />
							<div class="content">
								<h3 class="heading">Parcelshop Finder</h3>
								<p class="description">
									Built with Angular JS, Java & Twitter Bootstrap the site also includes a Google Maps parcelshop
									finder, editable pages via an integrated CRM.
								</p>
							</div>
						</div>
						<div class="row">
							<img src={printInStore} class="screenshot" alt="Product Analysis Technology" />
							<div class="content">
								<h3 class="heading">Technology Stack </h3>
								<p class="description">
									<ul>
										<li>React & Redux</li>
										<li>Jest & Enzyme</li>
										<li>SCSS (Twitter Bootstrap)</li>
										<li>REST</li>
										<li>Auth0</li>
										<li>Google Analytics & VWO</li>
									</ul>
								</p>
								<p class="description">
									<a href="https://www.myhermes.co.uk/">Live URL</a>
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

export default PortfolioHermes;
