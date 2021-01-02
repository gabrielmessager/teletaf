import React from 'react';
import { StyledLabel } from './Label.styles';

export function Label({ children, isRequired = true }) {
  return (
    <StyledLabel>
      {children}
      {isRequired && <>*</>}
    </StyledLabel>
  );
}
