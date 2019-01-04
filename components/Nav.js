import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import SVG from 'react-inlinesvg';
import hamburgerIcon from '../static/hamburger.svg';

const Nav = () => {
	return (
		<NavStyles>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="https://medium.com/@thomas_blaymire">
				<a target="_blank">Blog</a>
			</Link>
			<Link href="/portfolio">
				<a>Portfolio</a>
			</Link>
			<Link href="/contact">
				<a>Contact</a>
			</Link>

			<div className="hamburger">
				<SVG src={hamburgerIcon} alt="Hamburger Icon" />
			</div>
		</NavStyles>
	);
};

export default Nav;
