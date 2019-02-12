import Link from 'next/link';
import React, { Component } from 'react';
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
		transition: 0.2s;
		position: fixed;
		left: 0;
		top: 0;
		background: #100e17f2;
		z-index: 1;
		display: grid;
		width: 100%;
		height: calc(100vh);
		height: 100%;
		margin: 0;

		> ul {
			flex-direction: column;
			opacity: none;
			visibility: visible;
		}
	}

	.close-button {
		border: none;
		background: 0 0;
		display: none;
		cursor: pointer;
		position: relative;
		top: 0;
		right: 0;

		svg {
			width: 50px;
			height: 50px;
		}
	}

	.hamburger-button {
		display: block;
		border: none;
		cursor: pointer;
		outline: none;

		svg {
			width: 50px;
			height: 50px;
		}

		@media (min-width: 950px) {
			display: none;
		}
	}
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;

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

	.show {
		a {
			display: block;
			opacity: 1;
			visibility: visible;
		}
	}
`;

class Nav extends Component {
	state = {
		mobileNav: false,
		mobileOpen: false
	};

	toggleNavigationHandler = () => {
		this.setState({
			mobileNav: !this.state.mobileNav,
			mobileOpen: !this.state.mobileOpen
		 });
	};

	render() {
		return (
			<NavStyles>
				<div>
					<NavList className={this.state.mobileNav && 'show'}>
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

						{!this.state.mobileNav && (
							<button className="hamburger-button" onClick={this.toggleNavigationHandler}>
								<SVG src={hamburgerIcon} alt="Open Navigation" />
							</button>
						)}
					</NavList>

					{this.state.mobileNav && (
						<button className="close-button" onClick={this.toggleNavigationHandler}>
							<SVG src={closeIcon} alt="Close Navigation" />
						</button>
					)}
				</div>
			</NavStyles>
		);
	}
}

export default Nav;
