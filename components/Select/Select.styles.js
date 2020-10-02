import styled from "styled-components"
import { nunitoLight, nunitoRegular, nunitoBold } from "../../theme/fonts"

export const StyledSelect = styled.select`
  ${nunitoRegular}
  font-size: ${p => `${p.fontSize}px`};
  appearance: none;
  line-height: normal;
  padding: 8px 4px;
  border-radius: 8px;
  letter-spacing: 0.4px;
  background-color: ${p => p.backgroundColor};
  color: ${p => p.color};
  cursor: pointer;
  border: solid 1px rgb(255, 255, 255, 0.4);
`
