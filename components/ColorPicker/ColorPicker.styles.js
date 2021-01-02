import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import { buttonReset } from '../../theme/buttonReset';

export const StyledButton = styled.button`
  ${buttonReset};
  background-color: ${(p) => p.color};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  outline: none;
  margin-left: 4px;
`;

export const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;

export const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
