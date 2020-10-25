import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export const Container = styled.div`
  width: 900px;
  margin: 0 auto;

  ${theme.mediaQueries.tablet} {
    width: auto;
    padding: 16px;
  }
`;
