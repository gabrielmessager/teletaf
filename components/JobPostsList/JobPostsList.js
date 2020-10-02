/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
// import PropTypes from "prop-types"
import { JobPost } from "../JobPost";
import { Container } from "./JobPostsList.styles";
// import { generateMockData } from "./mockData"

export const JobPostsList = ({ jobs }) => {
  const [openedJobPosts, setOpenedJobPosts] = useState({});

  const toggleJobPost = (jobPostId) => {
    // close JobPost if currently opened
    if (openedJobPosts[jobPostId]) {
      return setOpenedJobPosts({ ...openedJobPosts, [jobPostId]: false });
    }
    setOpenedJobPosts({ ...openedJobPosts, [jobPostId]: true });
  };

  return (
    <Container>
      {jobs.map((jobpost) => (
        <JobPost
          onClick={() => {
            toggleJobPost(jobpost.id);
          }}
          isOpen={!!openedJobPosts[jobpost.id]}
          jobpost={jobpost}
          key={jobpost.id}
        />
      ))}
    </Container>
  );
};
