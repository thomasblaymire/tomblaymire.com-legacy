import SVG from "react-inlinesvg";
import Link from "next/link";
import facebookIcon from "../../static/facebook.svg";
import twitterIcon from "../../static/twitter.svg";
import linkedinIcon from "../../static/linkedin.svg";
import Button from "../Button";
import {SocialWrapper, SocialIcon, GetInTouch, Facebook, Twitter, Linkedin } from './styled';

const Social = () => {
  return (
    <SocialWrapper>
      <GetInTouch>
        <h4 className="heading">Get in touch</h4>
        <Link href="/contact">
          <Button
            btnFontSize={"1.4rem"}
            borderColor={"#05af43"}
            primaryColor="#fff"
            bgColor="#05af43"
            hoverBg={"#05da53"}
            borderRadius={"35px"}
          >
            Free Quote
          </Button>
        </Link>
      </GetInTouch>
      <Facebook>
        <SocialIcon>
          <a href="https://www.facebook.com/tblaymire1">
            <SVG src={facebookIcon} alt="Facebook" />
          </a>
        </SocialIcon>
      </Facebook>
      <Twitter>
        <SocialIcon>
          <a href="https://twitter.com/thomas_blaymire">
            <SVG src={twitterIcon} alt="Twitter" />
          </a>
        </SocialIcon>
      </Twitter>
      <Linkedin>
        <SocialIcon>
          <a href="https://www.linkedin.com/in/thomasblaymire">
            <SVG src={linkedinIcon} alt="Linkedin" />
          </a>
        </SocialIcon>
      </Linkedin>
    </SocialWrapper>
  );
};

export default Social;
