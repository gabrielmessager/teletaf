import styled from "styled-components";
import { nunitoExtraBold } from "../../theme/fonts";

export const Container = styled.div`
  background-color: ${(p) => p.backgroundColor || "none"};
  border: ${(p) => !p.backgroundColor && "solid 2px black"};
  border-radius: 4px;
  display: inline-block;
  ${nunitoExtraBold}
  font-size: 10px;
  margin: 0;
  margin-right: 4px;
  margin-top: 4px;
  max-width: 140px;
  overflow: hidden;
  padding: 4px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    color: white;
    background-color: black;
  }
`;
