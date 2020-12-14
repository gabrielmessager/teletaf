import styled from 'styled-components';
import Link from 'next/link';
import { theme, MEDIUM_DOWN } from '../../theme/theme';
import { nunitoLight, nunitoRegular, nunitoBold } from '../../theme/fonts';

const MOBILE_OFFSET = 75;
const HEADER_HEIGHT = 80;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  cursor: pointer;
`;

export const TagLine = styled.span`
  ${nunitoLight}
  font-size: 12px;
  margin-top: 4px;
`;

export const Wrapper = styled.div`
  position: relative;
  height: ${HEADER_HEIGHT}px;
  /* z-index: 2; */
`;

export const Container = styled.div`
  position: ${(p) => p.showFixedNavbar && 'fixed'};
  background-color: #fff;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
    opacity: ${(p) => (p.isSelected ? '1' : '0')};
  }
`;

export const MobileNav = styled.nav`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${UnorderedList} {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuButtonContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 12px;
  margin-top: 8px;
  z-index: 4;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

export const MobileWrapper = styled.div`
  overflow-x: hidden;
`;

export const NavContainer = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  ${(p) =>
    p.isOpen &&
    `
      opacity: 1;
      pointer-events: all;
  `}
`;

export const MenuButton = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;

  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 400ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 400ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  ${(p) =>
    p.isOpen &&
    `
      .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
      }
      .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
      }
      .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
      }
  `}
`;
