import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Portfolio from '../components/styles/PortfolioStyles';
import PageContent from '../components/styles/PageStyles';
import aboutHero from '../static/about-hero.jpg';

const PortfolioSkybet = () => {
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
                            <img class="screenshot" alt="Screenshot 1" />
                            <div class="content">
                                <h4 class="sub-heading">Project Requirements</h4>
                                <p class="description">Blah blah blah this is a description</p>
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

export default PortfolioSkybet;