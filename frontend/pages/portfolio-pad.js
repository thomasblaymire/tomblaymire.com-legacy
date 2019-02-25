import PageHero from "../components/PageHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/styles/PortfolioStyles";
import PageContent from "../components/styles/PageStyles";
import aboutHero from "../static/about-hero.jpg";
import portfolioPad from "../static/port-pad.jpg";
import padStats from "../static/pad-stats.png";
import padLogin from "../static/pad-login.jpg";

const PortfolioPad = () => {
  return (
    <div>
      <PageHero
        image={aboutHero}
        pageName="Product Dashboard"
        description="A fully featured dashboard to track expected volumes, metrics and performance."
      >
        <Header />
      </PageHero>
      <PageContent>
        <div className="container">
          <Portfolio>
            <div class="row">
              <img
                src={portfolioPad}
                class="screenshot"
                alt="Product Analysis Homepage"
              />
              <div class="content">
                <h3 class="heading">Project Requirements</h3>
                <p class="description">
                  Hermes Depot managers required a bespoke dashboard for the
                  upcoming Christmas perioud so they could easily see and
                  analyse the volume of parcels expected within the network
                  throughout the day.
                </p>
                <p className="description">
                  Having a clear user interface with responsive live updating
                  graphs was essential, the graphs also needed to be responsive
                  out of the box as managers used various different devices from
                  iPads to Samsung mobiles.
                </p>
              </div>
            </div>
            <div class="row">
              <img
                src={padLogin}
                class="screenshot"
                alt="Product Analysis Login"
              />
              <div class="content">
                <h3 class="heading">Dashboard Features</h3>
                <p class="description">
                  <ul>
                    <li>Authentication (via user ID & depot)</li>
                    <li>Real Time Updates</li>
                    <li>Responsive</li>
                    <li>Performant in low network areas</li>
                    <li>Visually appealing in low light situations</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="row">
              <img
                src={padStats}
                class="screenshot"
                alt="Product Analysis Technology"
              />
              <div class="content">
                <h3 class="heading">Technology Stack </h3>
                <p class="description">
                  <ul>
                    <li>React & Redux</li>
                    <li>Jest & Enzyme</li>
                    <li>SCSS</li>
                    <li>Twitter Bootstrap</li>
                    <li>REST</li>
                    <li>Auth0</li>
                  </ul>
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
