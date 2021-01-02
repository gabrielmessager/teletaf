import React from 'react';
import { Container, CloseButton, InnerContainer } from './Tag.styles';
import CloseButtonSVG from '../../public/close_button.svg';

export function Tag({
  backgroundColor = null,
  color,
  children,
  onRemove,
  withCloseButton = false,
  ...rest
}) {
  if (!children) return null;
  return (
    <Container backgroundColor={backgroundColor} color={color} {...rest}>
      <InnerContainer>
        <span>{children}</span>
        {withCloseButton && (
          <CloseButton onClick={onRemove}>
            <img alt="close icon" src={CloseButtonSVG} width="16" height="16" />
          </CloseButton>
        )}
      </InnerContainer>
    </Container>
  );
}
