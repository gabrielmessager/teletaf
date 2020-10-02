import styled from "styled-components"
import { nunitoLight, nunitoRegular, nunitoBold } from "../../theme/fonts"

export const FormSubSectionContainer = styled.div``

export const FormSectionContainer = styled.div`
  border: solid 1px #ddd;
  border-radius: 8px;
  padding: 16px;
  position: relative;

  ${FormSubSectionContainer} + ${FormSubSectionContainer} {
    margin-top: 8px;
  }
`
export const Title = styled.span`
  ${nunitoBold};
  font-size: 14px;
  text-transform: uppercase;
  color: #444;
  position: absolute;
  left: 50%;
  transform: translate(-50%, calc(-50% - 16px));
  padding: 0 8px;
  background-color: white;
`
