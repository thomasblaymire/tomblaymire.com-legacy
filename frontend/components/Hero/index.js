import Link from 'next/link';
import Button from '../Button';
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledButtonBlock,
  StyledHeroTitle,
  StyledHeroText,
} from './styled';

const Hero = ({ title, description, children }) => (
  <StyledHero>
    <StyledHeroWrapper>
      {children}
      <StyledHeroContent>
        <StyledHeroTitle>{title}</StyledHeroTitle>
        <StyledHeroText>{description}</StyledHeroText>

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
