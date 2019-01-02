import styled from 'styled-components';

const NavStyles = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: flex-end;
	font-size: 2rem;
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
`;

export default NavStyles;
