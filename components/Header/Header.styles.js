import styled from "styled-components";
import Link from "next/link";
import { theme, MEDIUM_DOWN } from "../../theme/theme";
import { nunitoLight, nunitoRegular, nunitoBold } from "../../theme/fonts";

const MOBILE_OFFSET = 75;

export const StyledImage = styled.img`
  cursor: pointer;
`;

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
  box-shadow: -2px 0px 8px 0px ${theme.colors.gray030};
`;

export const UnorderedList = styled.ul`
  ${nunitoRegular}
  display: flex;
  align-items: center;
  list-style-type: none;
  background: #fff;
  margin: 0;
  padding: 0;

  @media ${MEDIUM_DOWN} {
    width: ${MOBILE_OFFSET}%;
  }
`;

export const BulletContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Bullet = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
  transition: opacity 0.2s ease-in-out;
`;

export const ListElement = styled.li`
  padding: 16px;
  a {
    text-decoration: none;
    color: #000;
  }
  ${Bullet} {
    opacity: ${(p) => (p.isSelected ? "1" : "0")};
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
  margin-top: 8px;
  z-index: 2;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

export const MobileWrapper = styled.div`
  overflow-x: hidden;
`;

export const NavContainer = styled.div`
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
  box-shadow: -2px 0px 8px 0px ${theme.colors.gray030};
  z-index: 1;
  ${(p) =>
    p.isOpen &&
    `transform: translateX(-${MOBILE_OFFSET}%);
    -webkit-transform: translateX(-${MOBILE_OFFSET}%);
    -ms-transform: translateX(-${MOBILE_OFFSET}%);
  `}
`;
