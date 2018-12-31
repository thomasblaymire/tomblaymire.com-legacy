import PageHero from '../components/PageHero';
import Header from '../components/Header';
import aboutHero from '../static/about-hero.jpg';

const Blog = () => {
	return (
		<PageHero image={aboutHero} pageName="Blog" description="Learn more about my expertise.">
			<Header />
		</PageHero>
	);
};

export default Blog;
