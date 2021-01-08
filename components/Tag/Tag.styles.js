import styled from 'styled-components';
import { nunitoExtraBold } from '../../theme/fonts';

export const Container = styled.div`
  background-color: ${(p) => p.backgroundColor || 'none'};
  border: ${(p) =>
    p.backgroundColor ? `solid 2px ${p.backgroundColor}` : 'solid 2px black'};
  border-radius: 4px;
  color: ${(p) => p.color || '#000'};
  cursor: ${(p) => (p.onClick ? 'pointer' : 'default')};
  display: inline-block;
  ${nunitoExtraBold}
  font-size: 10px;
  margin: 0;
  margin-right: 4px;
  margin-top: 4px;
  overflow: hidden;
  padding: 4px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;

  ${(p) =>
    p.onClick &&
    `&:hover {
      color: white;
      background-color: black;
    }`}
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  margin: 0 2px 0 8px;
  height: 16px;
`;
