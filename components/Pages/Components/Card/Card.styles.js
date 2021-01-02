import styled from 'styled-components';
import {
  nunitoLight,
  nunitoRegular,
  nunitoBold,
} from '../../../../theme/fonts';
import { easeCurves } from '../../../../theme/eases';
import { theme } from '../../../../theme/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s ${easeCurves.primary};
  background-color: ${theme.colors.whiteA100};
  border-radius: ${(p) => (p.isOpen ? '0' : '4px')};
  margin-top: 8px;
`;

export const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 0 16px;
  width: 40%;
  word-break: break-word;

  ${theme.mediaQueries.mobile} {
    width: 80%;
  }
`;

export const JobTitle = styled.h2`
  ${nunitoBold}
  font-size: 18px;
  margin: 0;
  margin-bottom: 4px;
`;

export const CompanyName = styled.h3`
  ${nunitoLight}
  font-size: 16px;
  margin: 0;
  margin-bottom: 4px;
`;

export const DescriptionContainer = styled.div`
  ${nunitoLight}
  will-change: transform;
  overflow-y: hidden;
  transition: height 0.3s ${easeCurves.primary};
  height: 0px;
  cursor: pointer;
  transform: translateZ(0);
  line-height: 1.5;
  background-color: ${theme.colors.whiteA100};
  border-radius: ${(p) => (p.isOpen ? '0' : '0 0 4px 4px')};

  h5 {
    ${nunitoLight}
    text-align: center;
  }

  ${(p) => p.isOpen} && {
    height: ${(p) => `${p.height}px`};
  }

  ${theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;

    ${(p) => p.isOpen} && {
      height: ${(p) => p.height};
    }
  }
`;

export const Description = styled.div`
  ${nunitoRegular}
  font-size: 16px;
  margin: 0;
  padding: 16px 80px;

  ${theme.mediaQueries.mobile} {
    padding: 16px 32px;
  }
`;
