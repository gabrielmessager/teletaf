import React from "react"
import {
  Container,
  PrimaryThumb,
  StyledImage,
  ThumbWrapper,
} from "./Thumb.styles"

export function Thumb({ alt, src, srcSet }) {
  return (
    <ThumbWrapper>
      <PrimaryThumb>
        <Container>
          <StyledImage alt={alt} src={src} srcSet={srcSet} />
        </Container>
      </PrimaryThumb>
    </ThumbWrapper>
  )
}
