import styled from 'styled-components';
import facebookIcon from '../static/facebook.svg';
import twitterIcon from '../static/twitter.svg';
import linkedinIcon from '../static/linkedin.svg';

const SocialWrapper = styled.div`
	display: flex;
	padding: 0;
	margin: 0;
	& > div {
		width: 100%;
		height: 350px;
		-webkit-flex-flow: wrap row;
		flex-flow: wrap row;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const GetInTouch = styled.div`
	background-color: #e5eec1;
`;

const Facebook = styled.div`
	background-color: #a0d5aa;
`;

const Twitter = styled.div`
	background-color: #537a83;
`;

const Linkedin = styled.div`
	background-color: #2a363b;
`;

const SocialIcon = styled.img`
	width: 25%;
	svg {
		fill: red;
	}
	&:hover {
		cursor: pointer;
		fill: red;
	}
`;

const SocialLinks = () => {
	return (
		<SocialWrapper>
			<GetInTouch>
				<h4>Get in touch</h4>
				<button>Free Quote</button>
			</GetInTouch>
			<Facebook>
				<SocialIcon src={facebookIcon} alt="Facebook" />
			</Facebook>
			<Twitter>
				<SocialIcon src={twitterIcon} alt="Twitter" />
			</Twitter>
			<Linkedin>
				<SocialIcon src={linkedinIcon} alt="Linkedin" />
			</Linkedin>
		</SocialWrapper>
	);
};

export default SocialLinks;
