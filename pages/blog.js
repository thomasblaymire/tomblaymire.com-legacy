import { getBlogPostsAPI } from '../api';
import { linkResolver } from '../helpers';


const Blog = () => {
	return (
	<div>
		Blog
		<ul>
      {posts.map((post, index) => (
        <li key={index}>
          <Link
            as={linkResolver(post)}
            href={`/blogPost?slug=${post.uid}`}
            passHref
          >
            <a>{post.data.title[0].text}</a>
          </Link>
        </li>
      ))}
    </ul>
		</div>)
};

Blog.getInitialProps = async () => {
	// Here we call the API and request 5 documents
	const response = await getBlogPostsAPI({ pageSize: 5 });
	return {
	  posts: response.results
	};
  };

export default Blog;
