import styled from 'styled-components';
import PageStyles from './styles/PageStyles';

const HeroBlock = styled.div`
	color: ${props => props.theme.white};
	width: 100%;
	position: absolute;
	bottom: 10rem;

	@media (min-width: 992px) {
		width: 54%;
		bottom: 20rem;
	}

	.intro {
		font-size: 5.5rem;
		margin: 0;
		line-height: 1.5em;
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
		backgroundPositionY: '-20rem',
		position: 'relative'
	};

	return (
		<div style={style}>
			<PageStyles>
				<div className="container">
					{props.children}
					<HeroBlock>
						<h2 className="intro">{pageName}</h2>
						<div className="description">{description}</div>
					</HeroBlock>
				</div>
			</PageStyles>
		</div>
	);
};

export default Hero;
