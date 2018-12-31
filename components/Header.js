import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';

const StyledHeader = styled.header`
	.bar {
		width: 1170px;

		display: flex;
		-webkit-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		align-items: center;
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo />
			<Nav />
		</div>
	</StyledHeader>
);

export default Header;
