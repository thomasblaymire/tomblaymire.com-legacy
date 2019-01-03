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
	padding: 0px 15px;
`;

const HeroBlock = styled.div`
	color: ${props => props.theme.white};
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

	& > button {
		margin-right: 1.8rem;
	}

	a {
		color: ${props => props.theme.white};
		text-decoration: none;
		font-weight: normal;
		&:hover {
			color: red;
		}
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
						<Link href="/portfolio">
							<Button primaryColor="#05af43" bgColor="#05af43" hoverBg={'#05da53'}>
								My Work
							</Button>
						</Link>
						<Link href="/contact">
							<Button primaryColor="#05af43" bgColor="transparent" borderColor={'#fff'} hoverBg={'#fff'} hoverColor={'#000'}>
								Let's Talk
							</Button>
						</Link>
					</HeroButtons>
				</HeroBlock>
			</HeroContainer>
		</HeroImage>
	);
};

export default Hero;
