import styled from 'styled-components';
import Hero from '../components/Hero';
import Header from '../components/Header';
import PageContent from '../components/styles/PageStyles';
import PortfolioList from '../components/Portfolio/PortfolioList';
import ExpertiseCard from '../components/ExpertiseCard';
import SocialLinks from '../components/SocialLinks';
import FullWidthCta from '../components/FullWidthCta';
import locationImage from '../static/man-phone.jpg';
import rocket from '../static/rocket.svg';
import keyboard from '../static/keyboard.svg';
import laptop from '../static/laptop.svg';

const Expertise = styled.div`
	padding-top: 10rem;
	padding-bottom: 10rem;
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
	background-color: #e5eec1;
	display: flex;
`;

const LocationContent = styled.div`
	width: 50%;
	padding-top: 35px;
	padding-right: 6%;
	padding-bottom: 35px;
	padding-left: 6%;
	color: #494949;
	p {
		margin: 0 0 20px;
	}
`;
const LocationImage = styled.div`
	width: 50%;
	background-image: url(${locationImage});
	background-attachment: fixed;
	background-size: cover;
	height: 100%;
`;

const RecentProjects = styled.div`
	min-height: 100vh;
	padding-top: 10rem;
	padding-bottom: 10rem;
	p {
		width: 70%;
	}
`;

const PortfolioWrapper = styled.div`
	& > * {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 5rem;
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
								description="I work with various different front end technologies including HTML5, CSS3, React and Redux to to ensure the end product is fast and easy to use."
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
						<h2 className="heading">I live and work in Leeds UK.</h2>
						<p>
							I specialize in helping small businesses succeed online. With over 6 years experience working for some of
							the largest companies in the UK I have a breadth of knowledge around Web Design & Development.
						</p>
						<p>I also post regular helpful articles around startups, web design and user experience.</p>
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
							<PortfolioList amount={3} />
						</PortfolioWrapper>
					</div>
				</RecentProjects>
				<SocialLinks />
			</PageContent>
		</div>
	);
};

export default Home;
