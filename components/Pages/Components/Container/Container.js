import styled from 'styled-components';
import { theme } from '../../../../theme/theme';

export const Container = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-bottom: 32px;

  ${theme.mediaQueries.tablet} {
    width: auto;
    padding: 16px;
  }
`;
