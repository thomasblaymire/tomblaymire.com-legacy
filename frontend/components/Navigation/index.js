import Link from "next/link";
import React, { Component } from "react";
import SVG from "react-inlinesvg";
import hamburgerIcon from "../../static/hamburger.svg";
import socialLinkIcon from "../../static/socialShare.svg";
import { NavStyles, NavContainer, NavList } from './styled';

class Navigation extends Component {
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
          </NavList>

          {!this.state.mobileNav && (
            <button
              className="hamburger-button"
              onClick={this.toggleNavigationHandler}
            >
              <SVG src={hamburgerIcon} alt="Open Navigation" />
            </button>
          )}

        </NavContainer>
      </NavStyles>
    );
  }
}

export default Navigation;
