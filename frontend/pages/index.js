import styled from 'styled-components';
import Hero from '../components/Hero';
import Header from '../components/Header';
import PageContent from '../components/styles/PageStyles';
import PortfolioList from '../components/Portfolio/PortfolioList';
import ExpertiseCard from '../components/ExpertiseCard';
import SocialLinks from '../components/SocialLinks';
import FullWidthCta from '../components/FullWidthCta';
import Button from '../components/Button';
import locationImage from '../static/man-phone.jpg';
import rocket from '../static/test_animated.svg';
import keyboard from '../static/keyboard.svg';
import laptop from '../static/laptop.svg';

const Expertise = styled.div`
	padding: 10rem 0rem;
`;

const ExpertiseRow = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	grid-gap: 6rem;
	align-items: start;
	margin-top: 6rem;
`;

const Location = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.seaGreen};
`;

const LocationContent = styled.div`
	width: 100%;
	color: ${props => props.theme.grey};

	.location-content {
		width: 60%;
		margin: 0 auto;
		text-align: left;
	}

	.location-heading {
		line-height: 1.4em;
		margin-bottom: 4rem;
		font-size: 4.7rem;
		width: 80%;
	}

	p {
		margin: 0 0 20px;
		font-size: 1.8rem;
		color: #474747;
		font-family: Source Sans Pro;
	}
`;
const LocationImage = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${locationImage});
	background-attachment: fixed;
	background-size: cover;
`;

const RecentProjects = styled.div`
	min-height: 100vh;
	padding: 10rem 0rem;
	p {
		width: 70%;
	}
`;

const PortfolioWrapper = styled.div`
	& > * {
		margin-top: 5rem;
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
	}
`;

const Home = () => {
	return (
		<div>
			<Hero>
				<Header />
			</Hero>
			<PageContent>
				<Expertise>
					<div className="container">
						<h2 className="heading">My expretise</h2>
						<ExpertiseRow>
							<ExpertiseCard
								title="Web Development"
								description="I work with various different front end technologies including HTML5, JavaScript, React and Redux to to ensure the end product is fast and easy to use."
								icon={keyboard}
							/>

							<ExpertiseCard
								title="Web Design"
								description="I believe that any design should be researched thoroughly. I use the latest tools to create a design that sets you apart from the competition."
								icon={rocket}
							/>

							<ExpertiseCard
								title="User Experience"
								description="I follow the BASIC UX principles with every project. Providing users with a memorable experience is what I strive to do in each project."
								icon={laptop}
							/>
						</ExpertiseRow>
					</div>
				</Expertise>
				<Location>
					<LocationContent>
						<div className="location-content">
							<h2 className="heading location-heading">I live and work in Leeds UK!</h2>
							<p>
								I specialize in helping small businesses succeed online. With over 6 years experience working for some
								of the largest companies in the UK I have a breadth of knowledge around Web Design & Development.
							</p>
							<p>I also post regular helpful articles around startups, web design and user experience.</p>
							<Button
								btnFontSize={'1.7rem'}
								borderColor={'#05af43'}
								primaryColor="#fff"
								bgColor="#05af43"
								hoverBg={'#05da53'}
								borderRadius={'35px'}
							>
								Explore My Blog
							</Button>
						</div>
					</LocationContent>

					<LocationImage />
				</Location>
				<FullWidthCta text="Hire me for your next project" />
				<RecentProjects>
					<div className="container">
						<h2 className="heading">Recent projects</h2>
						<p className="sub-heading">
							I have worked across various exiting projects each with different requirements and deadlines. Some of my
							highlights are listed below.
						</p>
						<PortfolioWrapper>
							<PortfolioList amount={3} customStyle={true} />
						</PortfolioWrapper>
					</div>
				</RecentProjects>
				<SocialLinks />
			</PageContent>
		</div>
	);
};

export default Home;
