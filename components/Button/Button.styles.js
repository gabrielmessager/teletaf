import styled from "styled-components"
import { lighten, darken } from "polished"
import { buttonReset } from "../../theme/buttonReset"
import { easeCurves } from "../../theme/eases"
import { nunitoBold } from "../../theme/fonts"
import { theme } from "../../theme/theme"

export const StyledButton = styled.button`
  ${buttonReset};
  ${nunitoBold}
  outline: none;
  align-items: center;
  position: relative;
  border-radius: 6px;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  transition: background-color 0.05s ${easeCurves.primary},
    color 0.05s ${easeCurves.primary}, box-shadow 0.05s ${easeCurves.primary};
  box-shadow: 0 0 0 0 transparent;
  background-color: ${p => p.backgroundColor || theme.colors.green050};
  color: ${p => p.color || "white"};
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
  letter-spacing: 0.4px;

  ${p =>
    p.disabled &&
    `
      pointer-events: none;
      opacity: 0.3;
      background-color: rgba(0, 0, 0, 0.5);
    `}

  &:hover {
    background-color: ${p =>
      lighten(0.02, p.backgroundColor || theme.colors.green050)};
  }

  &:active {
    background-color: ${p =>
      darken(0.04, p.backgroundColor || theme.colors.green050)};
  }
`
