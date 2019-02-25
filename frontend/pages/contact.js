import PageHero from "../components/PageHero";
import Header from "../components/Header";
import PageContent from "../components/styles/PageStyles";
import contactPortfolio from "../static/about-hero.jpg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import styled from "styled-components";
import Link from "next/link";

const ContactWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  min-height: 100%;

  .container {
    max-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 15px;

    @media (min-width: 568px) {
      width: auto;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }
  }
`;

const Contact = () => {
  return (
    <div>
      <PageHero
        image={contactPortfolio}
        pageName="Contact"
        description="Please get in touch using the email below."
      >
        <Header />
      </PageHero>

      <ContactWrapper>
        <div className="container">
          <p>
            If you have a project you’d like to discuss please drop me a line on
            the email address below:
          </p>
          Email:{" "}
          <Link
            href="mailto:support@tomblaymire.com?Subject=New Project"
            target="_top"
          >
            support@tomblaymire.com
          </Link>
        </div>
      </ContactWrapper>
      <Footer />
    </div>
  );
};

export default Contact;
