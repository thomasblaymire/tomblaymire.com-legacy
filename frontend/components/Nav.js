import Link from "next/link";
import React, { Component } from "react";
import SVG from "react-inlinesvg";
import hamburgerIcon from "../static/hamburger.svg";
import closeIcon from "../static/close.svg";
import socialLinkIcon from "../static/socialShare.svg";
import styled from "styled-components";

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
	  justify-content: center;
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
	background: transparent;

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
  flex-wrap: wrap; 
  visibility: hidden;

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

  @media (min-width: 950px) {
	  visibility: visible;
	}

  .show {
    a {
      display: block;
      opacity: 1;
	  visibility: visible;
    }
  }
`;

const NavContainer = styled.div`
	display: flex;
`;

// const NavSocial = styled.div`
//   .links-button {
//     width: 25px;
//     position: relative;
//   }
//   .social-menu {
//     background: black;
// 	position: absolute;
// 	top: 105px;
// 	padding: 5px 5px;
// 	margin-left: 15px;
//     transition: visibility 0s ease 0s, opacity 0.5s ease;
//     -webkit-transition: visibility 0s ease 0s, opacity 0.5s ease;
// 	z-index: 2;
// 	background-color: #242424;
// 	list-style-type: none;
// 	li {
// 		cursor: pointer;
// 		display: block;
//     	padding: 0px;
// 	}
//   }
// `;

class Nav extends Component {
  state = {
    mobileNav: false,
    mobileOpen: false,
    socialMenu: false
  };

  toggleNavigationHandler = () => {
    this.setState({
      mobileNav: !this.state.mobileNav,
      mobileOpen: !this.state.mobileOpen
    });
  };

  toggleSocialLinks = () => {
    this.setState({ socialMenu: !this.state.socialMenu });
  };

  render() {
    return (
      <NavStyles>
        <NavContainer>
          <NavList className={this.state.mobileNav && "show"}>
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

            {/* <NavSocial>
              <div onMouseOver={this.toggleSocialLinks}>
                <SVG
                  className="links-button"
                  src={socialLinkIcon}
                  alt="Open Scial Links"
                />
              </div>
              {this.state.socialMenu && (
                <ul className="social-menu">
                  <li>F</li>
				  <li>T</li>
				  <li>L</li>
				  <li>G</li>
                </ul>
              )}
            </NavSocial> */}
          </NavList>

		  {!this.state.mobileNav && (
              <button
                className="hamburger-button"
                onClick={this.toggleNavigationHandler}
              >
                <SVG src={hamburgerIcon} alt="Open Navigation" />
              </button>
            )}

          {this.state.mobileNav && (
            <button
              className="close-button"
              onClick={this.toggleNavigationHandler}
            >
              <SVG src={closeIcon} alt="Close Navigation" />
            </button>
          )}
        </NavContainer>
      </NavStyles>
    );
  }
}

export default Nav;
