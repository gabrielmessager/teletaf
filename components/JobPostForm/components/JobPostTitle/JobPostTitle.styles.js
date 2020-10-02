import styled from "styled-components"
import { nunitoLight, nunitoRegular, nunitoBold } from "../../../../theme/fonts"

export const InputContainer = styled.div`
  background-color: #fbfbfb;
  width: 300px;
  border-radius: 8px;
  border: solid 1px #ddd;
  padding: 8px 0;
  margin-top: 4px;
`

export const Description = styled.p`
  ${nunitoLight};
  font-size: 12px;
  line-height: 14px;
  color: #999;
  letter-spacing: 0.4px;
  margin: 0;
  padding: 12px 0;
`
