import PageHero from '../components/PageHero';
import Header from '../components/Header';
import Blog from '../components/styles/BlogStyles';
import PageContent from '../components/styles/PageStyles';
import aboutHero from '../static/about-hero.jpg';
import styled from 'styled-components';

const BlogTerminalCommands = () => {
	return (
		<div>
			<PageHero image={aboutHero} pageName="Top 10 Terminal Commands For Web Developers">
				<Header />
			</PageHero>
			<PageContent>
                <div className="container">
                    <div className="heading">Top 10 Terminal Commands For Web Developers</div>
                    <Blog>
                        <p></p>
                    </Blog>
                </div>
				<Footer />
			</PageContent>
		</div>
	);
};

export default BlogTerminalCommands;
