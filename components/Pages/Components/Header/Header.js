import styled, { css } from 'styled-components';
import { nunitoBold } from '../../../../theme/fonts';

const headerMarginCSS = css`
  margin: 8px 0;
  margin-top: 32px;
`;

export const H1 = styled.h1`
  ${nunitoBold}
  ${headerMarginCSS}
  text-align: center;
`;

export const H2 = styled.h2`
  ${nunitoBold}
  ${headerMarginCSS}
`;

export const H3 = styled.h3`
  ${nunitoBold}
  ${headerMarginCSS}
`;
