import styled from "styled-components";
import { Button } from "../Button";
import { nunitoLight, nunitoRegular, nunitoBold } from "../../theme/fonts";
import { theme, MEDIUM_DOWN } from "../../theme/theme";

export const Container = styled.div`
  width: 100%;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  background-color: black;
  z-index: 2;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media ${MEDIUM_DOWN} {
    flex-direction: column;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  background-color: black;
  width: 280px;
  height: 40px;
  border-radius: 8px;
  border: solid 1px rgb(255, 255, 255, 0.4);
  margin-right: 8px;

  @media ${MEDIUM_DOWN} {
    width: 200px;
  }
`;

export const Text = styled.p`
  ${nunitoRegular};
  font-size: 18px;
  color: white;
  margin-right: 4px;
  letter-spacing: 0.4px;

  @media ${MEDIUM_DOWN} {
    font-size: 14px;
  }
`;

export const SelectContainer = styled.div`
  margin-right: 8px;
`;

export const StyledButton = styled(Button)`
  height: 42px;
`;
