import styled from 'styled-components';
import Hero from '../components/Hero';
import Header from '../components/Header';
import PortfolioList from '../components/Portfolio/PortfolioList';
import ExpertiseCard from '../components/ExpertiseCard';
import SocialLinks from '../components/SocialLinks';
import FullWidthCta from '../components/FullWidthCta';
import locationImage from '../static/man-phone.jpg';

const PageContent = styled.div`
	height: 100vh;

	.heading {
		font-family: Poppins;
		letter-spacing: -0.02em;
		font-weight: 700;
		font-style: normal;
		color: #2a363b;
		font-size: 4.5rem;
	}

	.sub-heading {
		font-family: Poppins;
		font-size: 2rem;
		color: #2a363b;
		margin: 0;
	}

	.container {
		width: 1170px;
		margin-right: auto;
		margin-left: auto;
		padding-left: 15px;
		padding-right: 15px;
	}
`;

const Expertise = styled.div`
	height: 80vh;
`;

const ExpertiseRow = styled.div`
	display: flex;
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
const LocationImage = styled.img`
	width: 50%;
	background-image: url(${locationImage});
	background-position: 0px 13.0102px;
	background-attachment: fixed;
	background-size: cover;
	height: 100%;
`;

const RecentProjects = styled.div`
	height: 100vh;
	p {
		width: 70%;
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
								description="I work with various different front end technologies including HTML5, CSS3, React and Angular JS to to ensure the end product is fast and easy to use."
								icon={'pen'}
							/>

							<ExpertiseCard
								title="Web Design"
								description="I believe that any design should be researched thoroughly. I use the latest tools to create a design that not only looks the best, but also sets you apart from your competition."
								icon={'pen'}
							/>

							<ExpertiseCard
								title="User Experience"
								description="I follow the BASIC UX principles with every project. Providing a user with a memorable experience is what I strive to do every day."
								icon={'pen'}
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
						<PortfolioList />
					</div>
				</RecentProjects>
				<SocialLinks />
			</PageContent>
		</div>
	);
};

export default Home;
