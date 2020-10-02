import styled from "styled-components"
import { nunitoRegular, nunitoBold } from "../../theme/fonts"
import { easeCurves } from "../../theme/eases"
import { theme } from "../../theme/theme"
import { Button } from "../Button"

export const NavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  pointer-events: none;
  transition: all 0.3s ${easeCurves.primary};
  a:-webkit-any-link {
    text-decoration: none;
  }

  @media screen and (max-width: 1380px) {
    position: absolute;
  }
`

export const StyledOrderedList = styled.ol`
  display: flex;
`

export const StyledList = styled.li`
  ${nunitoRegular};
  list-style: none;
  margin-right: 8px;
  color: white !important;

  > a {
    color: white;
    text-decoration: none;
  }
`

export const ButtonContainer = styled.div`
  margin-right: 16px;
  pointer-events: all;

  .Navbar__Button:first-child {
    margin-right: 8px;
  }
`

export const Text = styled.span`
  position: relative;
  top: 1px;
  ${nunitoBold};
  font-size: 32px;
  color: ${p => (p.hasScrolled ? "black" : "white")};
  margin-left: 16px;
  letter-spacing: 1px;
  pointer-events: all;
`
