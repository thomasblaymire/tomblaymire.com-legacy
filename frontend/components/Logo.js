import Link from "next/link";
import styled from "styled-components";
import logo from "../static/logo.png";

const LogoImg = styled.img`
  width: 5rem;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoImg src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
