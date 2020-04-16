import styled from 'styled-components';
import locationImage from '../../static/man-phone.jpg';
import Button from '../../components/Button';

export const StyledSection = styled.div`
  padding: 10rem 0rem;
`;

export const ExpertiseRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start;
  margin-top: 6rem;
`;

export const Location = styled.div`
  min-height: 80vh;
  height: auto;
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  @media (min-width: 480px) {
    min-height: 100vh;
  }
`;

export const LocationContent = styled.div`
  width: 100%;
  color: ${(props) => props.theme.grey};

  .location-content {
    width: 90%;
    margin: 0 auto;
    text-align: left;
    @media (min-width: 480px) {
      width: 60%;
    }

    P {
      font-size: 1.8rem;
      &:not(:last-child) {
        padding-bottom: 2rem;
      }
    }
  }

  .location-heading {
    line-height: 1.4em;
    margin-bottom: 4rem;
    font-size: 4.7rem;
    width: 100%;
    @media (min-width: 480px) {
      width: 80%;
    }
  }
`;
export const LocationImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${locationImage});
  background-attachment: fixed;
  background-size: cover;
  display: none;

  @media (min-width: 480px) {
    display: none;
  }

  @media (min-width: 768px) {
    height: 110vh;
    display: block;
  }
`;

export const RecentProjects = styled.div`
  min-height: 100vh;
  padding: 10rem 0rem;
  p {
    width: 70%;
  }
`;

export const PortfolioWrapper = styled.div`
  & > * {
    margin-top: 5rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 1rem;
`;
