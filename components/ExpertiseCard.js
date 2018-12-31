import styled from 'styled-components';

const Block = styled.div`
	box-sizing: border-box;
	padding-left: 15px;
	padding-right: 15px;
	width: 100%;

	.title {
		color: #2a363b;
	}

	.description {
		line-height: 30px;
		color: #494949;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 1.6rem;
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
`;

const ExpertiseCard = props => {
	const { title, description, icon } = props;

	return (
		<Block>
			<img src={icon} alt={title} />
			<h2 className="title">{title}</h2>
			<div className="seperator">
				<span className="divide" />
			</div>
			<div className="description">{description}</div>
		</Block>
	);
};

export default ExpertiseCard;
