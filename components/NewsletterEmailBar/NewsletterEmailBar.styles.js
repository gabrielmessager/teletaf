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

export const FormContainer = styled.form`
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
  color: ${(p) => (p.dark ? "#000" : "#fff")};
  /* margin-right: 4px; */
  padding: 0 8px;
  letter-spacing: 0.4px;

  @media ${MEDIUM_DOWN} {
    font-size: 14px;
    text-align: center;
  }
`;

export const SelectContainer = styled.div`
  height: 40px;
  margin-right: 8px;
`;

export const StyledButton = styled(Button)`
  height: 42px;
`;

export const MessageContainer = styled.div`
  position: absolute;
  text-align: center;
  box-shadow: -2px 0px 8px 0px ${theme.colors.gray030};
  bottom: ${(p) => `calc(${p.height}px + 16px)`};
  width: 100%;
  background-color: #fff;
  height: ${(p) => (p.isActive ? "64px" : 0)};
  opacity: ${(p) => (p.isActive ? "1" : 0)};
  transition: all 0.2s ease-in;
  overflow: hidden;

  @media ${MEDIUM_DOWN} {
    height: ${(p) => (p.isActive ? "51px" : 0)};
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: 24px;
`;
