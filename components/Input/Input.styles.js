import styled from 'styled-components';
import { nunitoRegular } from '../../theme/fonts';
import { easeCurves } from '../../theme/eases';

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const StyledInput = styled.input`
  ${nunitoRegular};
  font-size: ${(p) => `${p.fontSize}px`};
  border: none;
  width: calc(100% - 16px);
  flex: 1;
  padding: 0 8px;
  background: transparent;
  caret-color: "blue";
  outline: none;
  color: ${(p) => p.color};
  appearance: none;
  height: 100%;
  letter-spacing: 0.4px;


  &::placeholder {
    color: ${(p) => p.color};
  }

  &[type="search"]::-webkit-search-cancel-button {
    --size: 13px;
    --background: "grey"
    --icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14Ij48cGF0aCBkPSJNMTggNkw2IDE4TTYgNmwxMiAxMiIvPjwvc3ZnPgo=");
    -webkit-appearance: none;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    background: var(--background) var(--icon) 50% 50% no-repeat;
  }

  &[type="search"]::-webkit-search-cancel-button:hover {
    opacity: 0.9;
  }

  &[type="number"] {
    font-variant-numeric: tabular-nums;
  }

  transition: background 0.2s ${easeCurves.primary},
    box-shadow 0.2s ${easeCurves.primary}, opacity 0.2s ${easeCurves.primary},
    color 0.2s ${easeCurves.primary};
  border-radius: 4px;
`;

export const ErrorMessage = styled.div`
  ${nunitoRegular};
  font-size: 14px;
  color: red;
  position: absolute;
  top: 0;
  left: calc(100% + 16px);
  width: 100%;
`;
