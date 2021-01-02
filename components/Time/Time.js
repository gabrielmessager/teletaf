import React from 'react';
import { Container } from './Time.styles';

export function Time({ datetime = new Date(), children }) {
  return (
    <Container>
      <time dateTime={datetime}>{children}</time>
    </Container>
  );
}
