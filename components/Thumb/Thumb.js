import React from 'react';
import {
  Container,
  PrimaryThumb,
  StyledImage,
  ThumbWrapper,
} from './Thumb.styles';

export function Thumb({ alt, height, src, srcSet, width }) {
  return (
    <ThumbWrapper>
      <PrimaryThumb>
        <Container>
          <StyledImage
            alt={alt}
            height={height}
            src={src}
            srcSet={srcSet}
            width={width}
          />
        </Container>
      </PrimaryThumb>
    </ThumbWrapper>
  );
}
