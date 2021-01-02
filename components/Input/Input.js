import React from 'react';
import { Container, ErrorMessage, StyledInput } from './Input.styles';

export function Input({
  onBlur,
  placeholder,
  fontSize,
  onFocus,
  disabled,
  color,
  errors,
  ...other
}) {
  return (
    <Container>
      <StyledInput
        onBlur={onBlur}
        aria-label={placeholder}
        placeholder={placeholder}
        onFocus={onFocus}
        disabled={disabled}
        fontSize={fontSize}
        color={color}
        autoComplete="none"
        {...other}
      />
      {errors && <ErrorMessage>{errors}</ErrorMessage>}
    </Container>
  );
}
