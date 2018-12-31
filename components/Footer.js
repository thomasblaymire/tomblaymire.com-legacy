import styled from 'styled-components';

const FooterWrapper = styled.div`
	width: 1170px;
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px;
	display: flex;
`;

const FooterRow = styled.div`
	background: #2a2a2a;
	height: 72px;
	display: flex;
	padding-top: 15px;
	padding-bottom: 15px;
`;

const FooterCopyright = styled.div`
	font-size: 80%;
	color: #999;
	padding: 10px 0;
	justify-content: flex-start;
`;

const FooterSocial = styled.div``;

const Footer = () => {
	return (
		<FooterRow>
			<FooterWrapper>
				<FooterCopyright>Copyright © Tom Blaymire All Rights Reserved.</FooterCopyright>
				<FooterSocial>F, T, I, L</FooterSocial>
			</FooterWrapper>
		</FooterRow>
	);
};

export default Footer;
