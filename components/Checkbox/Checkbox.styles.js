import styled from "styled-components"
import { nunitoLight, nunitoRegular, nunitoBold } from "../../theme/fonts"

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: ${p => `${p.width}px`};
  height: ${p => `${p.height}px`};
`

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: ${p => `${p.width}px`};
  height: ${p => `${p.height}px`};
  background: ${props => (props.checked ? "salmon" : "papayawhip")};
  border-radius: 4px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`
export const Label = styled.span`
  ${nunitoRegular};
  font-size: 16px;
  color: #444;
  margin-left: 8px;
`
