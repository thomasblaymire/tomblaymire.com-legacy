import styled from 'styled-components';
import hero from '../static/me.jpg';
import Button from './Button';

const HeroImage = styled.div`
	background-image: url(${hero});
	background-size: cover;
	height: 100vh;
`;

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

const HeroButtons = styled.div`
	margin-top: 8rem;

	& > button {
		margin-right: 2rem;
		width: 200px;
	}
`;

const Hero = props => {
	return (
		<HeroImage>
			<HeroContainer>
				{props.children}
				<HeroBlock>
					<h2 className="intro">Hello, I'm Tom</h2>
					<div className="description">
						I’m a Freelance (UI/UX) Designer & Developer based in Leeds. I help companies deliver innovative, end-to-end
						products that meet both user and business needs.
					</div>
					<HeroButtons>
						<Button>My Work</Button>
						<Button>Let's Talk</Button>
					</HeroButtons>
				</HeroBlock>
			</HeroContainer>
		</HeroImage>
	);
};

export default Hero;
