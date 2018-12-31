import styled from 'styled-components';

const PortfolioBox = styled.div`
	.portfolio-image {
		width: 380px;
		height: 300px;
		margin-right: 30px;
		position: relative;

		&:hover {
			cursor: pointer;
		}
	}
`;

const PortfolioMeta = styled.div`
	.portfolio-title {
		font-family: Poppins;
		letter-spacing: -0.02em;
		font-weight: 700;
		font-style: normal;
		font-size: 2rem;
		margin: 0;
		color: #2a363b;
		cursor: pointer;
	}

	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
	}

	li {
		color: #474747;
		margin-right: 1rem;
		background: #dadada;
		border-radius: 5px;
		padding: 0 10px;
	}
`;

const PortfolioItem = props => {
	const { image, name, tags } = props;

	const portfolioClickHandler = () => {
		console.log('Clicked');
	};

	const tagList = tags.map(tag => <li>{tag}</li>);

	return (
		<PortfolioBox>
			<img onClick={portfolioClickHandler} className="portfolio-image" src={image} alt={name} />
			<PortfolioMeta>
				<h5 onClick={portfolioClickHandler} className="portfolio-title">
					{name}
				</h5>
				<ul>{tagList}</ul>
			</PortfolioMeta>
		</PortfolioBox>
	);
};

export default PortfolioItem;
