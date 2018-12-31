import styled from 'styled-components';

const SocialWrapper = styled.div`
	display: flex;
	& > div {
		width: 100%;
		height: 350px;
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

const Instagram = styled.div`
	background-color: #2a363b;
`;

const SocialLinks = () => {
	return (
		<SocialWrapper>
			<GetInTouch>
				<h4>Get in touch</h4>
				<button>Free Quote</button>
			</GetInTouch>
			<Facebook>F</Facebook>
			<Twitter>T</Twitter>
			<Instagram>I</Instagram>
		</SocialWrapper>
	);
};

export default SocialLinks;
