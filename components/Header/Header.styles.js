import styled from "styled-components";
import Link from "next/link";
import { theme } from "../../theme/theme";
import { nunitoLight, nunitoRegular, nunitoBold } from "../../theme/fonts";

export const Wrapper = styled.div`
  position: relative;
  height: 70px;
  z-index: 2;
`;

export const Container = styled.div`
  position: ${(p) => p.showFixedNavbar && "fixed"};
  background-color: #fff;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: -2px 0px 8px 0px grey;
`;

export const UnorderedList = styled.ul`
  ${nunitoRegular}
  display: flex;
  align-items: center;
  list-style-type: none;
  background: #fff;
  margin: 0;
  padding: 0;
`;

export const ListElement = styled.li`
  padding: 16px;
  a {
    text-decoration: none;
  }
`;

export const MobileNav = styled.nav`
  ${UnorderedList} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 16px;
  z-index: 1;
  background-color: #fff;
  border-radius: 4px;
`;

export const MobileWrapper = styled.div`
  position: absolute;
  left: 100%;
  background-color: #fff;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transition: transform 0.5s ease;
  transition: -webkit-transform 0.5s ease;
  box-shadow: -2px 0px 8px 0px grey;
  ${(p) =>
    p.isOpen &&
    `transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
  `}
`;
