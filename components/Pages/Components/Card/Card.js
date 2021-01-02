import React, { useRef } from 'react';
import {
  Container,
  CompanyName,
  Description,
  DescriptionContainer,
  JobContainer,
  JobTitle,
} from './Card.styles';
import { useRefHeight } from '../../../../hooks/useRefHeight';

export const Card = ({
  onClick,
  children,
  isOpen = false,
  title,
  subtitle,
}) => {
  const ref = useRef(null);
  const refHeight = useRefHeight(ref);

  return (
    <div style={{ width: '100%' }}>
      <Container onClick={onClick} isOpen={isOpen}>
        <JobContainer>
          <CompanyName>{title}</CompanyName>
          <JobTitle>{subtitle}</JobTitle>
        </JobContainer>
      </Container>
      <DescriptionContainer height={refHeight} isOpen={!isOpen}>
        <Description ref={ref}>{children}</Description>
      </DescriptionContainer>
    </div>
  );
};
