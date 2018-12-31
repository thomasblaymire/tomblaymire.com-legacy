import styled from 'styled-components';

const StyledButton = styled.button`
	font-size: 1.6rem;
	padding: 14px 30px;
	color: #fff;
	background-color: #05af43;
	border: none;
	border-radius: 5px;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
`;

const Button = props => {
	return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
