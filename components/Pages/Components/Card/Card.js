import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import {
  ButtonContainer,
  Container,
  CompanyName,
  Description,
  DescriptionContainer,
  JobContainer,
  JobTitle,
  TagsContainer,
  ThumbContainer,
  TimeAndButtonContainer,
  StyledButton,
} from './Card.styles';
import { Thumb } from '../../../../components/Thumb';
import { Tag } from '../../../../components/Tag';
import { Time } from '../../../../components/Time';
import { Button } from '../../../../components/Button';
import { useRefHeight } from '../../../../hooks/useRefHeight';

export const Card = ({ onClick, jobpost, isOpen = false }) => {
  // const tags = [jobpost?.primary_tag, ...jobpost?.extra_tags];
  // const date = dateFromObjectId(jobpost?._id);
  // const formattedDate = date.toISOString();
  // const postedAt = formatDistanceToNowStrict(date);
  const ref = useRef(null);
  const refHeight = useRefHeight(ref);

  return (
    <div style={{ width: '100%' }}>
      <Container onClick={onClick} isOpen={isOpen}>
        {/* <ThumbContainer>
          <Thumb src={jobpost?.company_logo} />
        </ThumbContainer> */}
        <JobContainer>
          <CompanyName>Travailler à distance</CompanyName>
          <JobTitle>Les avantages pour les salariés</JobTitle>
          <div>
            <Tag backgroundColor="lightgrey">{jobpost?.contract_type}</Tag>
            <Tag backgroundColor="lightgrey">{jobpost?.contract_duration}</Tag>
            <Tag backgroundColor="lightgrey">{jobpost?.location}</Tag>
          </div>
          {/* <TagsContainer className="JobPost__TagsContainer__Mobile">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsContainer> */}
        </JobContainer>
        {/* <TagsContainer className="JobPost__TagsContainer__Desktop">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer> */}
      </Container>
      <DescriptionContainer height={refHeight} isOpen={!isOpen}>
        <Description ref={ref}>wkejfbkjbwekfjbwefkjb</Description>
      </DescriptionContainer>
    </div>
  );
};
