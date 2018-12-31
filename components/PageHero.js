import styled from 'styled-components';

const HeroContainer = styled.div`
	width: 1170px;
	margin-right: auto;
	margin-left: auto;
	padding-left: 15px;
	padding-right: 15px;
`;

const HeroBlock = styled.div`
	color: #fff;
	position: absolute;
	top: 29%;
	width: 54%;

	.intro {
		font-size: 5.5rem;
		margin: 0;
	}

	.description {
		font-size: 2.5rem;
		line-height: 38px;
	}
`;

const Hero = props => {
	const { image, pageName, description } = props;

	const style = {
		backgroundImage: 'url(' + image + ')',
		backgroundSize: 'cover',
		height: '70vh',
		backgroundAttachment: 'fixed',
	};

	return (
		<div style={style}>
			<HeroContainer>
				{props.children}
				<HeroBlock>
					<h2 className="intro">{pageName}</h2>
					<div className="description">{description}</div>
				</HeroBlock>
			</HeroContainer>
		</div>
	);
};

export default Hero;
