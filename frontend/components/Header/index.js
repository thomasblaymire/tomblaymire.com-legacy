import Navigation from "../Navigation";
import Logo from "../Logo";
import Router from "next/router";
import NProgress from "nprogress";
import { StyledHeader } from './styled'

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};



const Header = () => (
  <StyledHeader>
    <Logo />
    <Navigation />
  </StyledHeader>
);

export default Header;
