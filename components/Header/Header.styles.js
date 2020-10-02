import styled from "styled-components"
import { theme } from "../../theme/theme"

export const Container = styled.div`
  position: relative;
  z-index: 1;
`

export const InputContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 500px;
  height: 56px;
  border-radius: 8px;

  ${theme.mediaQueries.mobile} {
    width: 70%;
  }
`
