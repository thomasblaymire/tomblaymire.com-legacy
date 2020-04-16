import Link from "next/link";
import Button from "../Button";
import { StyledHero, StyledHeroWrapper, StyledHeroContent, StyledButtonBlock} from './styled';

const Hero = props => (
    <StyledHero>
      <StyledHeroWrapper>
        {props.children}
        <StyledHeroContent>
          <h2 className="intro">Hello, I'm Tom</h2>
          <div className="description">
            I’m a Freelance (UI/UX) Software Engineer based in Sydney. I help
            companies deliver innovative, end-to-end products that meet both
            user and business needs.
          </div>
          <StyledButtonBlock>
            <Link href="/portfolio">
              <Button
                primaryColor="#fff"
                borderColor={"#05af43"}
                bgColor="#05af43"
                hoverBg={"#05da53"}
              >
                My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                primaryColor="#fff"
                bgColor="transparent"
                borderColor={"#fff"}
                hoverBg={"#fff"}
                hoverColor={"#000"}
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
