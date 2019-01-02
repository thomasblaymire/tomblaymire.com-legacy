import styled, { ThemeProvider } from 'styled-components';

const Block = styled.div`
	width: 100%;

	.title {
		color: ${props => props.theme.greyDark};
	}

	.description {
		line-height: 30px;
		color: ${props => props.theme.grey};
		font-family: ${props => props.theme.fontSecondary};
		font-size: 1.8rem;
	}

	.seperator {
		margin: 27px 0px;
	}

	.divide {
		width: 20%;
		height: 2px;
		background-color: ${props => props.theme.greyDark};
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
