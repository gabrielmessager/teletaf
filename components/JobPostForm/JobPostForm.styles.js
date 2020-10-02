import styled from "styled-components"
import { FormSectionContainer } from "../FormSection"

export const Container = styled.div`
  flex: 2;
  margin: 0 32px;
  margin-top: 32px;

  ${FormSectionContainer} + ${FormSectionContainer} {
    margin-top: 32px;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: stretch;

  ${Container} + ${Container} {
    flex: 1;
    margin-left: 0;
  }
`
