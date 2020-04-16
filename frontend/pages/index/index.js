import React, { Fragment } from 'react';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Link from 'next/link';
import PageContent from '../../components/styles/PageStyles';
import PortfolioList from '../../components/Portfolio/PortfolioList';
import Card from '../../components/Card';
import { Container, Heading } from '../../components/styles/PageStyles';
import Social from '../../components/Social';
import CallToAction from '../../components/CallToAction';
import {
  StyledSection,
  StyledButton,
  ExpertiseRow,
  Location,
  LocationContent,
  LocationImage,
  RecentProjects,
  PortfolioWrapper,
} from './styled';
import { expretiseData } from './data';

const Home = () => {
  return (
    <Fragment>
      <Hero
        title="Hello, I'm Tom"
        description="I’m a Front End Developer based in Sydney. I help
            companies deliver innovative, end-to-end products that meet both
            user and business needs."
      >
        <Header />
      </Hero>
      <PageContent>
        <StyledSection>
          <Container>
            <Heading>My Expretise</Heading>
            <ExpertiseRow>
              {expretiseData &&
                expretiseData.map((expertise) => (
                  <Card
                    key={expertise.title}
                    title={expertise.title}
                    description={expertise.description}
                    icon={expertise.icon}
                  />
                ))}
            </ExpertiseRow>
          </Container>
        </StyledSection>

        <Location>
          <LocationContent>
            <div className="location-content">
              <h2 className="heading location-heading">Building Web Applications</h2>
              <p>I enjoy building and developing applications using the latest Front End technologies and tools.</p>

              <p>
                In the past I have worked on various different websites such as{' '}
                <a href="https://www.xcover.com" target="_blank">
                  Xcover
                </a>
                ,{' '}
                <a href="https://m.skybet.com/" target="_blank">
                  Sky Bet
                </a>{' '}
                and{' '}
                <a href="https://www.myhermes.co.uk/" target="_blank">
                  myHermes
                </a>{' '}
                helping companys develop products to make a users life easier.
              </p>

              <p>
                I also maintain a course review website{' '}
                <a href="https://www.learnstability.com" target="_blank">
                  Learnstability
                </a>{' '}
                that is currently in beta.
              </p>

              <a href="https://www.learnstability.com/blog" target="_blank">
                <StyledButton
                  btnFontSize={'1.5rem'}
                  borderColor={'#05af43'}
                  primaryColor="#fff"
                  bgColor="#05af43"
                  hoverBg={'#05da53'}
                  borderRadius={'5px'}
                >
                  Explore My Blog
                </StyledButton>
              </a>
            </div>
          </LocationContent>
          <LocationImage />
        </Location>

        <CallToAction text="Hire me for your next project" />
        <RecentProjects>
          <div className="container">
            <h2 className="heading">Recent Projects</h2>
            <p className="sub-heading">
              I have worked across various exiting projects each with different requirements and deadlines. Some of my
              highlights are listed below.
            </p>
            <PortfolioWrapper>
              <PortfolioList amount={3} customStyle={true} />
            </PortfolioWrapper>
          </div>
        </RecentProjects>
        <Social />
      </PageContent>
    </Fragment>
  );
};

export default Home;
