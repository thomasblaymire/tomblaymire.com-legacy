import styled from 'styled-components';
import facebookIcon from '../static/facebook.svg';
import twitterIcon from '../static/twitter.svg';
import linkedinIcon from '../static/linkedin.svg';

const FooterWrapper = styled.div`
	width: 1170px;
	margin-right: auto;
	margin-left: auto;
	padding: 0px 15px;
	display: flex;
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
	img {
		width: 10px;
	}
`;

const Footer = () => {
	return (
		<FooterRow>
			<FooterWrapper>
				<FooterCopyright>Copyright © Tom Blaymire All Rights Reserved.</FooterCopyright>
				<FooterSocial>
					<a href="https://twitter.com/thomas_blaymire">
						<img src={twitterIcon} alt="Twitter" />
					</a>
					<a href="https://facebook.com/tblaymire1">
						<img src={facebookIcon} alt="Facebook" />
					</a>
					<a href="https://linkedin.com/tblaymire1">
						<img src={linkedinIcon} alt="LinkedIn" />
					</a>
					</FooterSocial>
			</FooterWrapper>
		</FooterRow>
	);
};

export default Footer;
