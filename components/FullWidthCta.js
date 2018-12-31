import styled from 'styled-components';
import ctaImage1 from '../static/ctaImage1.jpg';

const BackgroudImage = styled.div`
	background-image: url(${ctaImage1});
	background-repeat: repeat;
	background-size: cover;
	background-position: center center;
	background-attachment: scroll;
	padding-top: 8%;
	padding-bottom: 8%;
`;

const BackgroundText = styled.h2`
	color: #fff;
	text-align: center;
	font-family: Poppins;
	letter-spacing: -0.02em;
	font-weight: 700;
	font-style: normal;
	margin: 0;
	font-size: 4.5rem;
`;

const FullWidthCta = props => {
	return (
		<BackgroudImage>
			<BackgroundText>{props.text}</BackgroundText>
		</BackgroudImage>
	);
};

export default FullWidthCta;
