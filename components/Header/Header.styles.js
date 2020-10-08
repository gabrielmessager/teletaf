import styled from "styled-components";
import { theme } from "../../theme/theme";
import { nunitoLight, nunitoRegular, nunitoBold } from "../../theme/fonts";

export const Container = styled.div`
  ${nunitoRegular}
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const UnorderedList = styled.ul`
  display: flex;
  list-style-type: none;
  background: #fff;
  margin: 0;
  padding: 0;
`;

export const ListElement = styled.li`
  padding: 8px;
`;
