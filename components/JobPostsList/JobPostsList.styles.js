import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme/theme';
import { nunitoBold } from '../../theme/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  margin: 0 auto;
  padding-bottom: 116px;
  ${theme.mediaQueries.tablet} {
    width: 100%;
  }
`;

export const FilterWrapper = styled.div`
  position: relative;
  overflow-x: scroll;
  width: 100%;
  margin-top: 8px;
`;

export const FilterContainer = styled.div`
  width: 900px;
  ${nunitoBold}
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  text-align: center;

  ${theme.mediaQueries.tablet} {
    padding-right: 66px;
  }
`;

export const Filter = styled.div`
  width: 66px;
  height: 40px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  pointer-events: all;
  transition: background-color 0.2s ease-in-out;
  background-color: ${(p) => p.isSelected && `${theme.colors.gray020}`};
  text-transform: uppercase;

  span {
    margin-bottom: 4px;
    pointer-events: none;
  }

  &:hover {
    background-color: ${(p) =>
      p.isSelected ? `${theme.colors.gray020}` : '#fff'};
  }
`;

export const EmptyContainer = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${nunitoBold}
  font-size: 18px;
`;

export const Text = styled.div`
  padding: 16px;
  text-align: center;
`;

export const TagsContainer = styled.div`
  height: 32px;
  margin-top: 4px;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
`;

export const Spinner = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${spin} 0.7s infinite linear;
  animation: ${spin} 0.7s infinite linear;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-left: 2px solid #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const ArrowWrapper = styled.div`
  position: fixed;
  width: 64px;
  border-radius: 4px;
  pointer-events: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 8px;
  /* background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(255, 255, 255, 1) 100%
  ); */
`;

export const ArrowContainer = styled.div`
  height: 16px;
  padding: 0 8px;

  ${(p) =>
    p.rotate180 &&
    `
      transform: rotate(-180deg);
    `}
`;
