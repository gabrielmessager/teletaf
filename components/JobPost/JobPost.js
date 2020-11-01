import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
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
} from "./JobPost.styles";
import { Thumb } from "../Thumb";
import { Tag } from "../Tag";
import { Time } from "../Time";
import { Button } from "../Button";
import { useRefHeight } from "../../hooks/useRefHeight";

// helper to get `created_at` from mongodb
const dateFromObjectId = (objectId) => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

export const JobPost = ({ onClick, jobpost, isOpen = false }) => {
  const tags = [jobpost?.primary_tag, ...jobpost?.extra_tags];
  const date = dateFromObjectId(jobpost?._id);
  const formattedDate = date.toISOString();
  const postedAt = formatDistanceToNowStrict(date);
  const ref = useRef(null);
  const refHeight = useRefHeight(ref);

  return (
    <div style={{ width: "100%" }}>
      <Container onClick={onClick} isOpen={isOpen}>
        <ThumbContainer>
          <Thumb src={jobpost?.company_logo} />
        </ThumbContainer>
        <JobContainer>
          <CompanyName>{jobpost?.company_name}</CompanyName>
          <JobTitle>{jobpost?.title}</JobTitle>
          <div>
            <Tag backgroundColor="lightgrey">{jobpost?.contract_type}</Tag>
            <Tag backgroundColor="lightgrey">{jobpost?.contract_duration}</Tag>
            <Tag backgroundColor="lightgrey">{jobpost?.location}</Tag>
          </div>
          <TagsContainer className="JobPost__TagsContainer__Mobile">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsContainer>
        </JobContainer>
        <TagsContainer className="JobPost__TagsContainer__Desktop">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
        <TimeAndButtonContainer>
          <Time datetime={formattedDate}>{postedAt}</Time>
          <Button className="JobPost__ApplyButton__Desktop" href={jobpost?.url}>
            Postuler
          </Button>
        </TimeAndButtonContainer>
      </Container>
      <DescriptionContainer height={refHeight} isOpen={!isOpen}>
        <Description ref={ref}>
          {jobpost?.description}
          {jobpost?.responsabilities?.length > 0 && (
            <>
              <h3>Vos responsabilités 💼</h3>
              <ul>
                {jobpost?.responsabilities?.map((responsability, i) => (
                  <li key={i}>{responsability}</li>
                ))}
              </ul>
            </>
          )}
          {jobpost?.requirements?.length > 0 && (
            <>
              <h3>Votre expérience 🏆</h3>
              <ul>
                {jobpost?.requirements?.map((requirement, i) => (
                  <li key={i}>{requirement}</li>
                ))}
              </ul>
            </>
          )}
          {jobpost?.benefits?.length > 0 && (
            <>
              <h3>Les avantages 👌</h3>
              <ul>
                {jobpost?.benefits?.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
          {jobpost?.salary?.length > 0 && (
            <>
              <h3>Rémunération 💰</h3>
              <ul>
                <li>{jobpost?.salary}</li>
              </ul>
            </>
          )}
          <ButtonContainer>
            <StyledButton href={jobpost?.url}>Postuler</StyledButton>
          </ButtonContainer>
          <h5>
            N'hésitez pas à mentionner que Télétaf vous a aidé à trouver cette
            opportunité lorsque vous postulez 🙏
          </h5>
        </Description>
      </DescriptionContainer>
    </div>
  );
};

JobPost.propTypes = {
  jobpost: PropTypes.object.isRequired,
};
