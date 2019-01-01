import styled from 'styled-components';
import Link from 'next/link';
import hero from '../static/me.jpg';
import Button from './Button';

const HeroImage = styled.div`
	background-image: url(${hero});
	background-size: cover;
	min-height: 100vh;
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
	margin-top: 11rem;
	width: 60%;

	.intro {
		font-size: 5.5rem;
		margin: 0;
	}

	.description {
		font-size: 2.5rem;
		line-height: 38px;
		font-weight: 300;
	}
`;

const HeroButtons = styled.div`
	margin-top: 8rem;
	display: flex;

	& > * {
		padding-right: 2rem;
	}

	a {
		color: #ffffff;
		text-decoration: none;

		font-weight: normal;
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
						I’m a Freelance (UI/UX) Software Engineer based in Leeds. I help companies deliver innovative, end-to-end
						products that meet both user and business needs.
					</div>
					<HeroButtons>
						<Button type="primary">
							<Link href="/portfolio">
								<a>My Work</a>
							</Link>
						</Button>
						<Button type="secondary">
							<Link href="/contact">Let's Talk</Link>
						</Button>
					</HeroButtons>
				</HeroBlock>
			</HeroContainer>
		</HeroImage>
	);
};

export default Hero;
