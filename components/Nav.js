import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
	return (
		<NavStyles>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/blog">
				<a>Blog</a>
			</Link>
			<Link href="/portfolio">
				<a>Portfolio</a>
			</Link>
			<Link href="/contact">
				<a>Contact</a>
			</Link>
		</NavStyles>
	);
};

export default Nav;
