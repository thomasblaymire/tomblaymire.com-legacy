import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import facebookIcon from '../static/facebook.svg';
import twitterIcon from '../static/twitter.svg';
import linkedinIcon from '../static/linkedin.svg';
import Button from './Button';

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
		flex-direction: column;
	}

	.heading {
		font-family: ${props => props.theme.fontPrimary};
		letter-spacing: -0.02em;
		font-weight: 700;
		font-style: normal;
		color: #2a363b;
		font-size: 3.7rem;
		margin: 0;
		padding-bottom: 1rem;
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
	text-align: center;
	svg {
		fill: #fff;
		width: 27%;

		&:hover {
			cursor: pointer;
			fill: ${props => props.theme.black};
		}
	}
`;

const SocialLinks = () => {
	return (
		<SocialWrapper>
			<GetInTouch>
				<h4 className="heading">Get in touch</h4>
				<Button
					btnFontSize={'1.4rem'}
					borderColor={'#05af43'}
					primaryColor="#fff"
					bgColor="#05af43"
					hoverBg={'#05da53'}
					borderRadius={'35px'}
				>
					Free Quote
				</Button>
			</GetInTouch>
			<Facebook>
				<SocialIcon>
					<a href="https://www.facebook.com/tblaymire1">
						<SVG src={facebookIcon} alt="Facebook" />
					</a>
				</SocialIcon>
			</Facebook>
			<Twitter>
				<SocialIcon>
					<a href="https://twitter.com/thomas_blaymire">
						<SVG src={twitterIcon} alt="Twitter" />
					</a>
				</SocialIcon>
			</Twitter>
			<Linkedin>
				<SocialIcon>
					<a href="https://www.linkedin.com/in/thomasblaymire">
						<SVG src={linkedinIcon} alt="Linkedin" />
					</a>
				</SocialIcon>
			</Linkedin>
		</SocialWrapper>
	);
};

export default SocialLinks;
