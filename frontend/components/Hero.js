import styled from "styled-components";
import Link from "next/link";
import hero from "../static/me.jpg";
import Button from "./Button";

const HeroImage = styled.div`
  background-image: url(${hero});
  background-size: cover;
  min-height: 70vh;
  height: auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  position: relative;
  background-position-x: -500px;

  @media (min-width: 480px) {
    min-height: 100vh;
    background-position-x: center;
  }
`;

const HeroContainer = styled.div`
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 15px;
`;

const HeroBlock = styled.div`
  color: ${props => props.theme.white};
  width: 100%;
  position: relative;

  top: 10rem;

  @media (min-width: 480px) {
    width: 60%;
  }

  .intro {
    font-size: 7vmin;
    margin: 0;
  }

  .description {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 300;
    @media (min-width: 480px) {
      line-height: 4.5rem;
      font-size: 3.3vmin;
      font-weight: 300;
      min-width: 80%;
    }
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
            I’m a Freelance (UI/UX) Software Engineer based in Sydney. I help
            companies deliver innovative, end-to-end products that meet both
            user and business needs.
          </div>
          <HeroButtons>
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
          </HeroButtons>
        </HeroBlock>
      </HeroContainer>
    </HeroImage>
  );
};

export default Hero;
