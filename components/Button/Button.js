import React from "react";
import { StyledButton } from "./Button.styles";

export function Button({
  backgroundColor,
  className,
  color,
  children,
  href = null,
  onClick,
}) {
  return (
    <StyledButton
      as={href && "a"}
      backgroundColor={backgroundColor}
      className={className}
      color={color}
      href={href}
      onClick={onClick}
      target={href && "_blank"}
    >
      {children}
    </StyledButton>
  );
}
