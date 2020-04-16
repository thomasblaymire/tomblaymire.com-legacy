import Link from 'next/link';
import Button from '../Button';
import { StyledHero, StyledHeroWrapper, StyledHeroContent, StyledButtonBlock } from './styled';

const Hero = ({ title, description }) => (
  <StyledHero>
    <StyledHeroWrapper>
      {props.children}
      <StyledHeroContent>
        <h2 className="intro">{title}</h2>
        <div className="description">{description}</div>
        <StyledButtonBlock>
          <Link href="/portfolio">
            <Button primaryColor="#fff" borderColor={'#05af43'} bgColor="#05af43" hoverBg={'#05da53'}>
              My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              primaryColor="#fff"
              bgColor="transparent"
              borderColor={'#fff'}
              hoverBg={'#fff'}
              hoverColor={'#000'}
            >
              Let's Talk
            </Button>
          </Link>
        </StyledButtonBlock>
      </StyledHeroContent>
    </StyledHeroWrapper>
  </StyledHero>
);

export default Hero;
