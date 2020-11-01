import React, { useEffect, useState } from "react";
import Media from "react-media";
import Link from "next/link";
import {
  Container,
  ListElement,
  UnorderedList,
  Wrapper,
  ImageContainer,
  MobileWrapper,
  NavContainer,
  MobileNav,
  Bullet,
  BulletContainer,
  StyledImage,
} from "./Header.styles";
import Logo from "../../public/logo.svg";
import MenuIcon from "../../public/icon_menu.svg";
import { Button } from "../../components/Button";
import { LARGE, LARGE_MIN } from "../../theme/theme";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import {
  HOME_URL,
  ABOUT_URL,
  RESOURCES_URL,
  NEW_JOBPOST_URL,
} from "../../constants/routes";

export function Header({ pathname }) {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    if (windowWidth > LARGE_MIN) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  }, [isLarge, setIsLarge, windowWidth]);

  useEffect(() => {
    function shouldShowFixedNavbar(e) {
      const scrollTop = e.target.documentElement.scrollTop;
      if (isLarge) {
        if (scrollTop > 1) {
          setShowFixedNavbar(true);
        } else {
          setShowFixedNavbar(false);
        }
      }
    }
    window.addEventListener("scroll", shouldShowFixedNavbar);
    return () => window.removeEventListener("scroll", shouldShowFixedNavbar);
  }, [showFixedNavbar, setShowFixedNavbar, isLarge]);

  return isLarge ? (
    <Wrapper>
      <Container showFixedNavbar={showFixedNavbar}>
        <Link href="/">
          <StyledImage src={Logo} width="40" height="40" />
        </Link>
        <nav>
          <UnorderedList>
            <ListElement isSelected={pathname === ABOUT_URL}>
              <Link href="/about">Pourquoi choisir Télétaf?</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>

            <ListElement isSelected={pathname === HOME_URL}>
              <Link href="/">Annonces</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>
            <ListElement isSelected={pathname === RESOURCES_URL}>
              <Link href="/resources">Resources</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>
          </UnorderedList>
        </nav>
        <Button as="a" href="/new-jobpost" target="_self">
          Publier mon annonce
        </Button>
      </Container>
    </Wrapper>
  ) : (
    <MobileWrapper>
      <ImageContainer
        onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
      >
        <img src={MenuIcon} width="24" height="17" />
      </ImageContainer>
      <NavContainer isOpen={isMobileMenuOpened}>
        <MobileNav>
          <UnorderedList>
            <ListElement isSelected={pathname === ABOUT_URL}>
              <Link href="/about">Pourquoi choisir Télétaf?</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>

            <ListElement isSelected={pathname === HOME_URL}>
              <Link href="/">Annonces</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>
            <ListElement isSelected={pathname === RESOURCES_URL}>
              <Link href="/resources">Resources</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>
          </UnorderedList>
        </MobileNav>
      </NavContainer>
    </MobileWrapper>
  );
}
