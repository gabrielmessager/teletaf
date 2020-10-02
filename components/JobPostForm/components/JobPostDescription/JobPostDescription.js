import React from "react"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage, withFormik } from "formik"
import styled from "styled-components"

const MUST_BE_AN_EMAIL_ADDRESS = "Must be an email address"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

function InnerForm({
  onClose,
  handleSubmit,
  handleChange,
  handleBlur,
  isValid,
  touched,
  errors,
}) {
  // console.log("errors", errors)
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched}
        errors={errors}
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched}
        errors={errors}
      />
      <button type="submit">Submit</button>
    </StyledForm>
  )
}

const formikOptions = {
  handleSubmit: (values, { props }) => {
    // console.log("submitting", props)
    props.setJobDescription({ email: values.email, password: values.password })
  },
  validateOnChange: true,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email(MUST_BE_AN_EMAIL_ADDRESS)
      .required("Email should not be blank"),

    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  }),
}

export const JobPostDescription = withFormik(formikOptions)(InnerForm)
