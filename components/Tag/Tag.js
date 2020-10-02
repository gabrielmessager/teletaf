import React from "react"
import { Container } from "./Tag.styles"

export function Tag({ backgroundColor = null, children }) {
  return (
    <Container backgroundColor={backgroundColor}>
      <span>{children}</span>
    </Container>
  )
}
