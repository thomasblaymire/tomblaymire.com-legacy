import { getPortfolioItemsAPI } from '../api';
import { linkResolver } from '../helpers';
import Link from 'next/link';

const Blog = ({ posts = [] }) => {
	return (
		<div>
			Blog
			<ul>
				{posts.map((post, index) => (
					<li key={index}>{post.data.name[0].text}</li>
				))}
			</ul>
		</div>
	);
};

Blog.getInitialProps = async () => {
	// Here we call the API and request 5 documents
	const response = await getPortfolioItemsAPI({ pageSize: 5 });
	console.log(response.results);
	return {
		posts: response.results.data,
	};
};

export default Blog;
