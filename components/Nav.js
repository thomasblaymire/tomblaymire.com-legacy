import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
	return (
		<NavStyles>
			<Link href="/about" prefetch>
				<a>About</a>
			</Link>
			<Link href="/blog">
				<a>Blog</a>
			</Link>
			<Link href="/portfolio" prefetch>
				<a>Portfolio</a>
			</Link>
			<Link href="/contact" prefetch>
				<a>Contact</a>
			</Link>
		</NavStyles>
	);
};

export default Nav;
