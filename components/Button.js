import styled from 'styled-components';

const PrimaryButton = styled.button`
	background-color: #05af43;
	font-size: 1.6rem;
	padding: 10px 30px;
	color: #fff;
	border: solid 2px #05af43;
	border-radius: 5px;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
	width: 200px;

	&:hover {
		background-color: #05da53;
		border: solid 2px #05da53;
	}
`;

const SecondaryButton = styled.button`
	background-color: transparent;
	font-size: 1.6rem;
	padding: 10px 30px;
	color: #fff;
	border: solid 2px white;
	border-radius: 5px;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
	width: 200px;

	&:hover {
		color: red;
		background-color: #fff;
	}
`;

const Button = props => {
	return (
		<div>
			{props.type === 'primary' ? (
				<PrimaryButton>{props.children}</PrimaryButton>
			) : (
				<SecondaryButton>{props.children}</SecondaryButton>
			)}
		</div>
	);
};

export default Button;
