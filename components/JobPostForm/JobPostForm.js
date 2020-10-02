import React, { useState } from "react"
import { JobPostTitle } from "./components/JobPostTitle"

import { JobPostDesign } from "./components/JobPostDesign"
import { JobPostDescription } from "./components/JobPostDescription"
import { Container, Flex } from "./JobPostForm.styles"

export function JobPostForm({ children }) {
  const [jobPostTitle, setJobPostTitle] = useState({
    title: "",
    companyName: "",
  })
  const [jobPostDesign, setJobPostDesign] = useState({
    showLogo: false,
    isRecurring: false,
    shouldHiglight: false,
    color: null,
  })
  const [jobDescription, setJobDescription] = useState({
    email: null,
    password: null,
  })

  console.log("showLogo", jobPostDesign.showLogo)
  console.log("isRecurring", jobPostDesign.isRecurring)
  console.log("shouldHiglight", jobPostDesign.shouldHiglight)
  console.log("color", jobPostDesign.color)

  return (
    <Flex>
      <Container>
        <JobPostTitle setJobPostTitle={setJobPostTitle} />
        <JobPostDesign setJobPostDesign={setJobPostDesign} />
        <JobPostDescription setJobDescription={setJobDescription} />
      </Container>
      <Container>
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "solid 1px #ddd",
            "border-radius": "8px",
            "margin-bottom": "32px",
          }}
        >
          <span>testimonial</span>
        </div>
      </Container>
    </Flex>
  )
}
