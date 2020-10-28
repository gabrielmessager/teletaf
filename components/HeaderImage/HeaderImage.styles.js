import styled from "styled-components";
import { theme } from "../../theme/theme";

export const BackgroundImage = styled.div`
  background: ${(p) => `url(${p.url})`} no-repeat center -220px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 300px;

  ${theme.mediaQueries.mobile} {
    background-position: center center;
  }
`;
