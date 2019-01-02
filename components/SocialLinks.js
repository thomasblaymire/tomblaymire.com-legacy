import styled from 'styled-components';
import SVG from 'react-inlinesvg';
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

const SocialIcon = styled.div`

	svg {
		fill: #FFF;
		width: 15%;
	}
	&:hover {
		cursor: pointer;
		fill: ${props => props.theme.black};
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
				<SocialIcon>
					<SVG src={facebookIcon} alt="Facebook" />
				</SocialIcon>
			</Facebook>
			<Twitter>
				<SocialIcon>
					<SVG src={twitterIcon} alt="Twitter" />
				</SocialIcon>
			</Twitter>
			<Linkedin>
				<SocialIcon>
					<SVG src={linkedinIcon} alt="Facebook" />
				</SocialIcon>
			</Linkedin>
		</SocialWrapper>
	);
};

export default SocialLinks;
