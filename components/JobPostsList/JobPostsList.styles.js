import styled from 'styled-components';
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
