import React from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
  Label,
} from './Checkbox.styles';

export function Checkbox({
  height = 16,
  label,
  width = 16,
  checked,
  setChecked,
}) {
  return (
    <div>
      <label>
        <CheckboxContainer width={width} height={height}>
          <HiddenCheckbox
            checked={checked}
            onChange={(evt) => setChecked(evt.target.checked)}
          />
          <StyledCheckbox checked={checked} width={width} height={height}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        <Label>{label}</Label>
      </label>
    </div>
  );
}
