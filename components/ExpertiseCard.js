import styled, { ThemeProvider } from 'styled-components';

const Block = styled.div`
	width: 100%;

	.title {
		color: #2a363b;
	}

	.description {
		line-height: 30px;
		color: #494949;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 1.8rem;
	}

	.seperator {
		margin-top: 27px;
		margin-bottom: 27px;
	}

	.divide {
		width: 20%;
		height: 2px;
		background-color: #2a363b;
		display: block;
		content: '';
	}

	.icon {
		width: 5rem;
		fill: #3eaca8;
	}
`;

const ExpertiseCard = props => {
	const { title, description, icon } = props;

	return (
		<Block>
			<img className="icon" src={icon} alt={title} />
			<h2 className="title">{title}</h2>
			<div className="seperator">
				<span className="divide" />
			</div>
			<div className="description">{description}</div>
		</Block>
	);
};

export default ExpertiseCard;
