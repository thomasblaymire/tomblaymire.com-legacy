import styled from 'styled-components';

const StyledButton = styled.button`
	color: ${props => props.primaryColor};
	background-color: ${props => props.bgColor || '#eee'};
	border: 2px solid ${props => props.borderColor};
	border-radius: 5px;
	font-family: ${props => props.theme.fontPrimary};
	font-size: ${props => props.btnFontSize || 50};
	padding: 10px 30px;
	cursor: pointer;
	width: 200px;

	&:hover {
		background-color: ${props => props.hoverBg};
		color: ${props => props.hoverColor};
		border: 2px solid ${props => props.hoverBg};
	}
`;

const Button = props => {
	return <StyledButton {...props} />;
};

export default Button;
