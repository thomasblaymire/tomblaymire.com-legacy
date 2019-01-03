import styled from 'styled-components';
import Link from 'next/link';

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
	a {
		text-decoration: none;
		font-weight: normal;
	}
`;

const PortfolioMeta = styled.div`
	.portfolio-title {
		font-family: ${props => props.theme.fontPrimary};
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
		cursor: initial;
	}
`;

const PortfolioItem = props => {
	const { image, name, tags, id, url} = props;

	const tagList = tags.map(tag => <li key={tag}>{tag}</li>);

	return (
		<PortfolioBox>
			<Link href={{ pathname: {url} }} >
				<a>
					<img className="portfolio-image" src={image} alt={name} />
					<PortfolioMeta>
						<h5 className="portfolio-title">{name}</h5>
						<ul>{tagList}</ul>
					</PortfolioMeta>
				</a>
			</Link>
		</PortfolioBox>
	);
};

export default PortfolioItem;
