import PageHero from '../components/PageHero';
import Header from '../components/Header';
import aboutHero from '../static/about-hero.jpg';

const About = () => {
	return (
		<PageHero image={aboutHero} pageName="About" description="Learn more about my expertise.">
			<Header />
		</PageHero>
	);
};

export default About;
