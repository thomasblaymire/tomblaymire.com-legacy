
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import facebookIcon from '../static/facebook.svg';
import twitterIcon from '../static/twitter.svg';
import linkedinIcon from '../static/linkedin.svg';

const FooterWrapper = styled.div`
	width: 1170px;
	margin-right: auto;
	margin-left: auto;
	padding: 0px 15px;
	display: flex;
	justify-content: center;
`;

const FooterRow = styled.div`
	background: #2a2a2a;
	height: 72px;
	display: flex;
	padding: 15px 0;
`;

const FooterCopyright = styled.div`
	font-size: 80%;
	color: #999;
	padding: 10px 0;
	justify-content: flex-start;
`;

const FooterSocial = styled.div`
	display: flex;
	padding-right: 5px;
`;

const FooterIcon = styled.div`
	svg {
		fill: #fff;
		width: 10%;

		&:hover {
			cursor: pointer;
			fill: ${props => props.theme.black};
		}
	}
`;

const Footer = () => {
	return (
		<FooterRow>
			<FooterWrapper>
				<FooterCopyright>Copyright © Tom Blaymire All Rights Reserved.</FooterCopyright>
					<FooterSocial>
						<FooterIcon>
							<a href="https://twitter.com/thomas_blaymire">
								<SVG src={twitterIcon} alt="Twitter Icon" />
							</a>
						</FooterIcon>

						<FooterIcon>
							<a href="https://facebook.com/tblaymire1">
								<SVG src={facebookIcon} alt="Facbook Icon" />
							</a>
						</FooterIcon>

						<FooterIcon>
							<a href="https://linkedin.com/tblaymire1">
								<SVG src={linkedinIcon} alt="LinkedIn Icon" />
							</a>
						</FooterIcon>
					</FooterSocial>
			</FooterWrapper>
		</FooterRow>
	);
};

export default Footer;
