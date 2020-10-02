import styled from "styled-components"
import { theme } from "../../theme/theme"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  margin: 0 auto;
  padding-bottom: 64px;

  ${theme.mediaQueries.tablet} {
    width: 100%;
  }
`
