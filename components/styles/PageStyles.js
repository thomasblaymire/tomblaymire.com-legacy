import styled from 'styled-components';

const PageStyles = styled.div`
	height: auto;
	min-height: 100vh;

	.heading {
		font-family: Poppins;
		letter-spacing: -0.02em;
		font-weight: 700;
		font-style: normal;
		color: #2a363b;
		font-size: 4.5rem;
		margin: 0;
	}

	.sub-heading {
		font-family: Poppins;
		font-size: 2rem;
		color: #2a363b;
		margin: 0;
	}

	.container {
		max-width: 1170px;
		margin-right: auto;
		margin-left: auto;
		padding-left: 15px;
		padding-right: 15px;
	}
`;

export default PageStyles;
