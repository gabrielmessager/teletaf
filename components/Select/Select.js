import React, { useState } from 'react';
import { StyledSelect } from './Select.styles';

export function Select({ backgroundColor, color, fontSize, id, name, values }) {
  return (
    <StyledSelect
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      name={name}
      id={id}
    >
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </StyledSelect>
  );
}
