import styled from 'styled-components';

const PortfolioStyles = styled.div`
	margin: 0;
	padding: 5rem;
	font-size: 2rem;

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .screenshot {
        width: 100%;
        max-width: 100%;
        max-height: 351px;
    }

    .content {
        padding: 0rem 5rem;
        width: 50%;

        .description {
            color: red;
        }
    }

`;

export default PortfolioStyles;
