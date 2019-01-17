import Link from 'next/link';
import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import hamburgerIcon from '../static/hamburger.svg';
import closeIcon from '../static/close.svg';
import styled from 'styled-components';

const Navigation = styled.div`
	.navigation__checkbox {
		display: none;
	}

	.navigation__button {
		background: white;
		height: 7rem;
		width: 7rem;
		position: fixed;
		top: 6rem;
		right: 6rem;
		border-radius: 50%;
		z-index: 2000;
		box-shadow: 0 1rem 3rem rgba(#000, 0.1);
	}

	.navigation__background {
		height: 6rem;
		width: 6rem;
		border-radius: 50%;
		position: fixed;
		top: 6.5rem;
		right: 6.5rem;
		background-image: radial-gradient(green, blue);
		z-index: 1000;
		/*
		transform: scale(80); */
	}

	.navigation__nav {
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 1500;

		opacity: 0;
		width: 0;
	}

	.navigation__list {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		list-style: none;
		text-align: center;
	}

	.navigation__item {
		margin: 1rem;
	}

	.navigation__link {
		display: inline-block;
		font-size: 3rem;
		font-weight: 300;
		padding: 1rem 2rem;
		color: white;
		text-decoration: none;
		background-image: linear-gradient(120deg, orangered 0%, orangered 50%, white 50%);
		background-size: 100%;
	}

	.navigation__checkbox:checked ~ .navigation__background {
		transform: scale(80);
	}

	.navigation__checkbox:checked ~ .navigation__nav {
		opacity: 1;
		width: 100%;
	}
`;

class NavTwo extends Component {
	render() {
		return (
			<Navigation>
				<input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
				<label for="nav-toggle" className="navigation__button">
					MENU
				</label>

				<div className="navigation__background">&nbsp;</div>

				<nav className="navigation">
					<ul className="navigation__list">
						<li className="navigation__item">
							<a href="#" className="navigation__link">
								About
							</a>
							<a href="#" className="navigation__link">
								Blog
							</a>
							<a href="#" className="navigation__link">
								Contact
							</a>
							<a href="#" className="navigation__link">
								Portfolio
							</a>
							<a href="#" className="navigation__link">
								LOL
							</a>
						</li>
					</ul>
				</nav>
			</Navigation>
		);
	}
}

export default NavTwo;
