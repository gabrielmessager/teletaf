/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import {
  Container,
  CompanyName,
  Description,
  DescriptionContainer,
  JobContainer,
  JobTitle,
  TagsContainer,
  ThumbContainer,
  TimeAndButtonContainer,
} from "./JobPost.styles";
import { Thumb } from "../Thumb";
import { Tag } from "../Tag";
import { Time } from "../Time";
import { Button } from "../Button";
import { useEffect } from "react";
// import { ObjectId } from "mongodb";

const dateFromObjectId = (objectId) => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

export const JobPost = ({ onClick, jobpost, isOpen }) => {
  const tags = [jobpost?.primary_tag, ...jobpost?.extra_tags];
  const date = dateFromObjectId(jobpost?._id);
  // const date = ObjectId(id).getTimestamp();
  console.log("date", date);

  // const date = new Date(jobpost?.createdAt);
  const formattedDate = date.toISOString();
  const postedAt = formatDistanceToNowStrict(date);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  // console.log("height", height)

  // addOns: {
  //   showLogo: randomBoolean(),
  //   autobumpAfter30Days: randomBoolean(),
  //   highlightPost: randomBoolean(),
  //   useCompanyBrandColor: randomBoolean(),
  //   isSticky: randomBoolean(),
  // },
  // applicationProcess: faker.lorem.text(),
  // companyLogo: faker.image.avatar(),
  // companyName: faker.company.companyName(),
  // createdAt
  // description: faker.name.jobDescriptor(),
  // email: faker.internet.email(),
  // extraTags: [faker.lorem.word(), faker.lorem.word()],
  // id: faker.random.uuid(),
  // location: faker.name.jobArea(),
  // title: faker.name.jobTitle(),
  // primaryTag: faker.lorem.word(),
  // requirements: faker.lorem.text(),
  // responsibilities: faker.lorem.text(),
  // salary: faker.finance.amount(),
  // url: faker.internet.url(),

  return (
    <div style={{ width: "100%" }}>
      <Container onClick={onClick}>
        <ThumbContainer>
          <Thumb src={jobpost?.companyLogo} />
        </ThumbContainer>
        <JobContainer>
          <CompanyName>{jobpost?.companyName}</CompanyName>
          <JobTitle>{jobpost?.title}</JobTitle>
          <div>
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
        {/* <h2>{jobpost?.description}</h2> */}
        {/* <h2>{jobpost?.requirements}</h2> */}
        {/* <h2>{jobpost?.responsibilities}</h2> */}
        {/* <h2>{jobpost?.salary}</h2> */}
        {/* <h2>{jobpost?.url}</h2> */}
      </Container>
      <DescriptionContainer height={height} isOpen={!isOpen}>
        <Description ref={ref}>{jobpost?.description}</Description>
        <Button className="JobPost__ApplyButton__Mobile" href={jobpost?.url}>
          Postuler
        </Button>
      </DescriptionContainer>
    </div>
  );
};

JobPost.propTypes = {
  jobpost: PropTypes.object.isRequired,
};
