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
  MobileNav,
} from "./Header.styles";
import Logo from "../../static/logo.svg";
import MenuIcon from "../../static/icon_menu.svg";
import { Button } from "../../components/Button";
import { LARGE, LARGE_MIN } from "../../theme/theme";

export function Header({ pathname }) {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    function shouldShowFixedNavbar(e) {
      const scrollTop = e.target.documentElement.scrollTop;
      if (scrollTop > 1) {
        setShowFixedNavbar(true);
      } else {
        setShowFixedNavbar(false);
      }
    }
    window.addEventListener("scroll", shouldShowFixedNavbar);
    return () => window.removeEventListener("scroll", shouldShowFixedNavbar);
  }, [showFixedNavbar]);

  return (
    <Media query={LARGE}>
      {(isLarge) => {
        console.log("isLarge", isLarge);
        return isLarge ? (
          <Wrapper>
            <Container showFixedNavbar={showFixedNavbar}>
              <Link href="/">
                <img src={Logo} width="40" height="40" />
              </Link>
              <nav>
                <UnorderedList>
                  <ListElement>
                    <Link href="/about">Pourquoi choisir Télétaf?</Link>
                  </ListElement>

                  <ListElement>
                    <Link href="/">Annonces</Link>
                  </ListElement>
                  <ListElement>
                    <Link href="/resources">Resources</Link>
                  </ListElement>
                </UnorderedList>
              </nav>
              <Button as="a" href="/new-jobpost" target="_self">
                Publier mon annonce
              </Button>
            </Container>
          </Wrapper>
        ) : (
          <>
            <ImageContainer onClick={() => setOpenMobileMenu(!openMobileMenu)}>
              <img src={MenuIcon} width="24" height="17" />
            </ImageContainer>
            <MobileWrapper isOpen={openMobileMenu}>
              <MobileNav>
                <UnorderedList>
                  <ListElement>
                    <Link href="/about">Pourquoi choisir Télétaf?</Link>
                  </ListElement>

                  <ListElement>
                    <Link href="/">Annonces</Link>
                  </ListElement>
                  <ListElement>
                    <Link href="/resources">Resources</Link>
                  </ListElement>
                </UnorderedList>
              </MobileNav>
            </MobileWrapper>
          </>
        );
      }}
    </Media>
  );
}
