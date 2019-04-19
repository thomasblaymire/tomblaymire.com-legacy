import PageHero from "../components/PageHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/styles/PortfolioStyles";
import sbgMain from "../static/sbgMain.png";
import inPlay from "../static/inplay.png";
import features from "../static/features.svg";
import PageContent from "../components/styles/PageStyles";
import aboutHero from "../static/about-hero.jpg";

const PortfolioSkyBet = () => {
  return (
    <div>
      <PageHero
        image={aboutHero}
        pageName="Sky Betting & Gaming"
        description="The UKs leading gambling website. "
      >
        <Header />
      </PageHero>
      <PageContent>
        <div className="container">
          <Portfolio>
            <div class="row">
              <img
                src={features}
                class="screenshot-alt"
                alt="Skybet Feature Enhancements"
              />
              <div class="content">
                <h3 class="heading">Feature Enhancements</h3>
                <p class="description">
                  I worked within the bet placement team, enhancing the React
                  app to make a users betting experince faster, easier and
                  clearer.
                </p>
                <p className="description">
                  Highlights include creating a Quick BetSlip to allow customers
                  to bet directly from anywhere within the app. Price Change
                  Preferences for odds setting along with various UI
                  enhancements.
                </p>
              </div>
            </div>
            <div class="row">
              <img
                src={sbgMain}
                class="screenshot-alt"
                alt="Skybet Tech Stack"
              />
              <div class="content">
                <h3 class="heading">Technology Stack</h3>
                <p class="description">
                  Features were built using the latest front end stack
                  consisting of the following:{" "}
                </p>
                <ul>
                  <li>React</li>
                  <li>Mobx</li>
                  <li>JavaScript (ES6)</li>
                  <li>Aphrodite CSS</li>
                  <li>Jest & Enzyme</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <img
                src={inPlay}
                class="screenshot"
                alt="Skybet Performance & Success"
              />
              <div class="content">
                <h3 class="heading">Performance & Success</h3>
                <p class="description">
                  Developing features with a performance first mindset was
                  essential. Over 26 million daily visitors and 200 bets per
                  second it was vital that code was of high quality and reviewed
                  thoroughly.
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

export default PortfolioSkyBet;
