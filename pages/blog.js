import PageHero from '../components/PageHero';
import Header from '../components/Header';
import styled from 'styled-components';
import aboutHero from '../static/about-hero.jpg';
import { getPosts } from '../api/posts';
import Post from '../components/Post/PostItem';

const BlogWrapper = styled.div``;

const Blog = ({ posts }) => {
	return (
		<div>
			<PageHero image={aboutHero} pageName="Blog" description="Learn more about my expertise.">
				<Header />
			</PageHero>

			<BlogWrapper>ha</BlogWrapper>
		</div>
	);
};

// Blog.getInitialProps = async ({ req }) => {
// const res = await getPosts();
// const json = await res.json();
// return { posts: json };
// };

export default Blog;
