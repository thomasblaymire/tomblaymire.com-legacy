import Link from 'next/link';
import logo from '../../static/logo.png';
import { StyledLogo } from './styled';

const Logo = () => (
  <Link href="/">
    <StyledLogo src={logo} alt="Logo" />
  </Link>
);

export default Logo;
