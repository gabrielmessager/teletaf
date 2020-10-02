import React from "react"
import { FormSectionContainer, Title } from "./FormSection.styles"

export function FormSection({ title, children }) {
  return (
    <FormSectionContainer>
      <Title>{title}</Title>
      <>{children}</>
    </FormSectionContainer>
  )
}
