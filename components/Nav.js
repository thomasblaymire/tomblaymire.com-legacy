import Link from 'next/link';
import React, {Component} from 'react';
import SVG from 'react-inlinesvg';
import hamburgerIcon from '../static/hamburger.svg';
import closeIcon from '../static/close.svg';
import styled from 'styled-components';

const NavStyles = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: flex-end;
	font-size: 2rem;

	.show {
		opacity: 1;
   		visibility: visible;
		transition: .2s;
		position: absolute;
		left: 0;
		background: #100e17;
		z-index: 1;
		display: grid;
		width: 100%;
		height: calc(100vh);
		height: 100%;
	}
`;

const NavList = styled.ul`
	display: flex;
	a,
	button {
		display: flex;
		align-items: center;
		position: relative;
		text-transform: uppercase;
		font-size: 1.7rem;
		background: none;
		font-family: ${props => props.theme.fontPrimary};
		letter-spacing: 0.05em;
		font-weight: 500;
		border: 0;
		cursor: pointer;
		color: ${props => props.theme.white};
		padding: 25px 15px;
		&:hover {
			color: #3eaca8;
		}
	}
`;

const HamburgerIcon = styled.button`
	border: none;
	background: 0 0;
	cursor: pointer;
	svg {
		width: 50px;
		height: 50px;
	}
`;

const CloseButton = styled.button`
	border: none;
	background: 0 0;
	cursor: pointer;
	svg {
		width: 50px;
		height: 50px;
	}
`;

class Nav extends Component {

	state = {
		mobileNav: false
	}

	toggleNavigationHandler = () => {
		this.setState({ mobileNav: !this.state.mobileNav });
	}

	render() {
		return (
			<NavStyles>
				<div className={this.state.mobileNav ? 'show' : 'haha'}>
					<NavList>
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
					</NavList>

					<HamburgerIcon onClick={this.toggleNavigationHandler}>
						<SVG src={hamburgerIcon} alt="Open Navigation" />
					</HamburgerIcon>

					<CloseButton>
						<SVG src={closeIcon} alt="Close Navigation" />
					</CloseButton>
				</div>
			</NavStyles>
		);
	}
}

export default Nav;
