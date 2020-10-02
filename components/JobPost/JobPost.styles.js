import styled from "styled-components"
import { nunitoLight, nunitoRegular, nunitoBold } from "../../theme/fonts"
import { easeCurves } from "../../theme/eases"
import { theme } from "../../theme/theme"

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.3s ${easeCurves.primary};
  border-radius: 4px;

  .JobPost__ApplyButton__Desktop {
    opacity: 0;
    transition: opacity 0.2s ${easeCurves.primary};
  }

  &:hover {
    background-color: ${theme.colors.gray010};
    .JobPost__ApplyButton__Desktop {
      opacity: 1;
    }
  }

  .JobPost__TagsContainer__Desktop {
    display: block;
  }
  .JobPost__TagsContainer__Mobile,
  .JobPost__ApplyButton__Mobile {
    display: none;
  }

  ${theme.mediaQueries.mobile} {
    .JobPost__TagsContainer__Mobile,
    .JobPost__ApplyButton__Mobile {
      display: block;
    }

    .JobPost__ApplyButton__Desktop,
    .JobPost__TagsContainer__Desktop {
      display: none;
    }
  }
`

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
`

export const ThumbContainer = styled.div`
  min-width: 48px;
  min-height: 48px;
  width: 48px;
  height: 48px;
  background-color: red;
  border-radius: 4px;
`

export const JobTitle = styled.h2`
  ${nunitoBold}
  font-size: 18px;
  margin: 0;
`

export const CompanyName = styled.h3`
  ${nunitoLight}
  font-size: 16px;
  margin: 0;
`

export const TagsContainer = styled.div`
  padding: 0 16px;
  width: 30%;

  ${theme.mediaQueries.mobile} {
    width: 100%;
    padding: 4px 0;
  }
`

export const TimeAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;

  ${theme.mediaQueries.mobile} {
    width: 20%;
  }
`
export const DescriptionContainer = styled.div`
  will-change: transform;
  overflow-y: hidden;
  transition: height 0.3s ${easeCurves.primary};
  height: 0px;
  width: calc(100% + 32px);
  cursor: pointer;
  transform: translateZ(0);

  .JobPost__ApplyButton__Mobile {
    display: none;
  }

  ${p => p.isOpen} && {
    height: ${p => `${p.height}px`};
  }

  ${theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;

    ${p => p.isOpen} && {
      height: ${p => `calc(${p.height}px + 48px)`};
    }

    .JobPost__ApplyButton__Mobile {
      display: block;
      margin: 0 auto;
    }
  }
`

export const Description = styled.p`
  ${nunitoRegular}
  font-size: 16px;
  margin: 0;
  padding: 16px 80px;
`
