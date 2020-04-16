import React from 'react';
import { StyledCard, StyledCardIcon, StyledCardTitle, StyledCardSeperator, StyledCardText } from './styled';

const Card = ({ title, description, icon }) => (
  <StyledCard>
    <StyledCardIcon src={icon} alt={title} />
    <StyledCardTitle>{title}</StyledCardTitle>
    <StyledCardSeperator />
    <StyledCardText>{description}</StyledCardText>
  </StyledCard>
);

export default Card;
