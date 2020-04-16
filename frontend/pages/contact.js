import React, { Fragment } from 'react';
import PageHero from '../components/PageHero';
import Header from '../components/Header';
import PageContent from '../components/styles/PageStyles';
import contactPortfolio from '../static/about-hero.jpg';
import Button from '../components/Button';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Link from 'next/link';
import { Container } from '../components/styles/PageStyles';

const ContactWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  min-height: 100%;
`;

const Contact = () => (
  <Fragment>
    <PageHero image={contactPortfolio} pageName="Contact" description="Please get in touch using the email below.">
      <Header />
    </PageHero>

    <ContactWrapper>
      <Container>
        <p>If you have a project you’d like to discuss please drop me a line on the email address below:</p>
        Email:{' '}
        <Link href="mailto:support@tomblaymire.com?Subject=New Project" target="_top">
          support@tomblaymire.com
        </Link>
      </Container>
    </ContactWrapper>
    <Footer />
  </Fragment>
);

export default Contact;
