import React from "react";
import { Container } from "./Tag.styles";

export function Tag({ backgroundColor = null, children }) {
  if (!children) return null;
  return (
    <Container backgroundColor={backgroundColor}>
      <span>{children}</span>
    </Container>
  );
}
