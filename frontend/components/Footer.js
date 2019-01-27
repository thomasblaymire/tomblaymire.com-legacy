import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import facebookIcon from '../static/facebook.svg';
import twitterIcon from '../static/twitter.svg';
import linkedinIcon from '../static/linkedin.svg';

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
	margin: 0 auto;
`;

const Footer = () => {
	return (
		<FooterRow>
			<FooterCopyright>Copyright © Tom Blaymire All Rights Reserved.</FooterCopyright>
		</FooterRow>
	);
};

export default Footer;
