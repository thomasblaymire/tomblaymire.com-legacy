import styled from 'styled-components'
import ctaImage1 from '../../static/ctaImage1.jpg';

export const StyledCallToAction = styled.div`
	background-image: url(${ctaImage1});
	background-repeat: repeat;
	background-size: cover;
	background-position: center center;
	background-attachment: scroll;
	padding: 8% 0%;
`;

export const StyledText = styled.h2`
	color: ${props => props.theme.white};
	text-align: center;
	font-family: ${props => props.theme.fontPrimary};
	letter-spacing: -0.02em;
	font-weight: 700;
	font-style: normal;
	margin: 0;
	font-size: 4.5rem;
`;
