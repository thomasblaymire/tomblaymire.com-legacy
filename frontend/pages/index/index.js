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
import Button from '../../components/Button';
import {
  StyledSection,
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
            <Heading>My expretise</Heading>
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
              <h2 className="heading location-heading">I live and work in Leeds UK!</h2>
              <p>
                I specialize in helping small businesses succeed online. With over 6 years experience working for some
                of the largest companies in the UK I have a breadth of knowledge around Web Design & Development.
              </p>
              <p>I also post regular helpful articles around startups, web design and user experience.</p>
              <Link href="/portfolio">
                <Button
                  btnFontSize={'1.7rem'}
                  borderColor={'#05af43'}
                  primaryColor="#fff"
                  bgColor="#05af43"
                  hoverBg={'#05da53'}
                  borderRadius={'35px'}
                >
                  Explore My Blog
                </Button>
              </Link>
            </div>
          </LocationContent>
          <LocationImage />
        </Location>

        <CallToAction text="Hire me for your next project" />
        <RecentProjects>
          <div className="container">
            <h2 className="heading">Recent projects</h2>
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
