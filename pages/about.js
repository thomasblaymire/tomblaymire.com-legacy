import PageHero from '../components/PageHero';
import Header from '../components/Header';
import PageContent from '../components/styles/PageStyles';
import FullWidthCta from '../components/FullWidthCta';
import Footer from '../components/Footer';
import aboutHero from '../static/about-hero.jpg';
import laptopPortfolio from '../static/laptop-portfolio.png';
import styled from 'styled-components';

const AboutIntro = styled.div`
	background-color: #fbfbfb;
	padding-top: 5%;
	padding-bottom: 5%;
`;

const AboutWrapper = styled.div`
	display: flex;
	padding: 5rem 0rem;
	box-sizing: border-box;
	flex-wrap: wrap;
	-webkit-box-align: center;
	align-items: center;
`;

const AboutInfo = styled.div`
	width: 50%;
	padding-right: 3rem;
	p {
		margin: 0 0 20px;
		line-height: 30px;
		color: ${props => props.theme.grey};
		font-family: ${props => props.theme.fontSecondary};
		font-size: 1.8rem;
	}
`;

const AboutImage = styled.div`
	width: 50%;
	img {
		width: 550px;
		box-sizing: border-box;
		padding-left: 15px;
		padding-right: 15px;
		width: 100%;
	}
`;

const About = () => {
	return (
		<div>
			<PageHero image={aboutHero} pageName="About" description="Learn more about my expertise.">
				<Header />
			</PageHero>
			<PageContent>
				<AboutIntro>
					<div className="container">
						<h2 className="heading">A little about me</h2>
						<AboutWrapper>
							<AboutInfo>
								<p>
									I have been working within the web industry for over 6 years now, helping clients of all sizes
									transform their digital presence online.
								</p>

								<p>
									Currently I’m working for the UK's leading online bookmaker{' ' + ' '}
									<a href="https://m.skybet.com/" target="_blank">
										Sky Betting & Gaming
									</a>{' '}
									developing their primary website along with various in house enhancements.
								</p>

								<p>
									In the past I have worked for Hermes to implement various different digital transformation projects
									including e-commerce, dashboards and recruitment apps.
								</p>

								<p>
									What makes me stand out from the rest is that I have a real passion for helping businesses grow. By
									using the latest front end tools and technologies I ensure that my clients websites are not only
									faster than their competitors but are also memorable and easy to use.
								</p>
							</AboutInfo>
							<AboutImage>
								<img src={laptopPortfolio} alt="Laptop With Portfolio" />
							</AboutImage>
						</AboutWrapper>
					</div>
				</AboutIntro>
				<FullWidthCta text="Work with me on your next exiting project." />
				<Footer />
			</PageContent>
		</div>
	);
};

export default About;
