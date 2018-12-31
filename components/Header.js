import styled from 'styled-components';
import Nav from './Nav';
import Logo from './Logo';

const StyledHeader = styled.header`
	.bar {
		width: 970px;
		margin-right: auto;
		margin-left: auto;
		padding-left: 15px;
		padding-right: 15px;
	}

	display: grid;
	grid-template-columns: auto 1ft;
	justify-content: space-between;
	align-items: stretch;
	@media (max-width: 1300px) {
		grid-template-columns: 1fr;
		justify-content: center;
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
