import styled from 'styled-components';
import { nunitoLight, nunitoRegular, nunitoBold } from '../../theme/fonts';
import { easeCurves } from '../../theme/eases';
import { theme } from '../../theme/theme';
import { Button } from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s ${easeCurves.primary};
  background-color: ${theme.colors.whiteA100};
  border-radius: ${(p) => (p.isOpen ? '0' : '4px')};
  margin-top: 8px;

  .JobPost__ApplyButton__Desktop {
    opacity: 0;
    transition: opacity 0.2s ${easeCurves.primary};
  }

  &:hover {
    background-color: ${theme.colors.gray020};
    .JobPost__ApplyButton__Desktop {
      opacity: 1;
    }
  }

  .JobPost__TagsContainer__Desktop {
    display: block;
  }
  .JobPost__TagsContainer__Mobile {
    display: none;
  }

  ${theme.mediaQueries.mobile} {
    .JobPost__TagsContainer__Mobile {
      display: block;
    }

    .JobPost__ApplyButton__Desktop,
    .JobPost__TagsContainer__Desktop {
      display: none;
    }
  }
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

export const ThumbContainer = styled.div`
  min-width: 48px;
  min-height: 48px;
  width: 48px;
  height: 48px;
  background-color: ${theme.colors.whiteA100};
  border-radius: 4px;
  border: 1px solid ${theme.colors.gray020};
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

  span {
    margin-right: 4px;
  }
`;

export const TagsContainer = styled.div`
  padding: 0 16px;
  width: 30%;

  ${theme.mediaQueries.mobile} {
    width: 100%;
    padding: 4px 0;
  }
`;

export const TimeAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;

  ${theme.mediaQueries.mobile} {
    width: 20%;
  }
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
  will-change: transform, height;

  h5 {
    ${nunitoLight}
    text-align: center;
  }

  ${(p) => p.isOpen} && {
    height: ${(p) => `${p.height}px`};
    transform: translateZ(0);
    will-change: transform, height;
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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const StyledButton = styled(Button)`
  width: 200px;
  height: 50px;
  font-size: 18px;
`;
