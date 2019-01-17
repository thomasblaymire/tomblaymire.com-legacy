import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';

const StyledHeader = styled.header`
	max-width: 1170px;
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
	padding: 2rem 0rem;
`;

const Header = () => (
	<StyledHeader>
		<Logo />
		<Nav />
	</StyledHeader>
);

export default Header;
