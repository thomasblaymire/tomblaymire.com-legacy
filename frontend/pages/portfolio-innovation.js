import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Portfolio from '../components/styles/PortfolioStyles';
import innovationPost from '../static/innovation-post.png';
import innovationMain from '../static/port-innovation-main.png';
import innovationBrowse from '../static/innovation-browse.png';
import PageContent from '../components/styles/PageStyles';
import aboutHero from '../static/about-hero.jpg';

const PortfolioInnovation = () => {
  return (
    <div>
      <PageHero
        image={aboutHero}
        pageName="Hermes Innovation"
        description="A new website to showcase the latest innovative products. "
      >
        <Header />
      </PageHero>
      <PageContent>
        <div className="container">
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
              <img src={innovationPost} class="screenshot" alt="Screenshot 1" />
              <div class="content">
                <h3 class="heading">Technology Stack</h3>
                <p class="description">
                  A focus on speed, maintainability and performance was essential when gathering the initial
                  requirements. The site was built with:{' '}
                </p>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>ES6</li>
                  <li>JavaScript</li>
                  <li>SCSS</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <img src={innovationBrowse} class="screenshot" alt="Screenshot 1" />
              <div class="content">
                <h3 class="heading">Featues & Success</h3>
                <p class="description">
                  The website is built with a range of different features allowing a user to submit innovation ideas
                  for the team to respond to, approve and maintain.
                </p>
                <p class="description">
                  Overall the project was a huge success internally and has given the innovation team a solid brand
                  presence online.
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

export default PortfolioInnovation;
