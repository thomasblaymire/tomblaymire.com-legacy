import SVG from 'react-inlinesvg';
import facebookIcon from '../../static/facebook.svg';
import twitterIcon from '../../static/twitter.svg';
import linkedinIcon from '../../static/linkedin.svg';
import { StyledFooter, StyledCopyright } from './styled';

const Footer = () => (
  <StyledFooter>
    <StyledCopyright>Copyright © Tom Blaymire All Rights Reserved.</StyledCopyright>
  </StyledFooter>
);

export default Footer;
