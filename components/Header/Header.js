import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Container,
  ListElement,
  LogoContainer,
  UnorderedList,
  Wrapper,
  MenuButtonContainer,
  MenuButton,
  MobileWrapper,
  NavContainer,
  MobileNav,
  Bullet,
  BulletContainer,
  StyledImage,
  TagLine,
} from './Header.styles';
import Logo from '../../public/logo.png';
import { Button } from '../Button';
import { LARGE_MIN } from '../../theme/theme';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import {
  HOME_URL,
  ABOUT_URL,
  RESSOURCES_URL,
  NEW_JOBPOST_URL,
} from '../../constants/routes';

const MENU = {
  ABOUT: 'Pourquoi choisir Télétaf?',
  HOME: 'Annonces',
  RESSOURCES: 'Ressources',
};

export function Header({ pathname }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    setIsMobileMenuOpened(false);
  }, [pathname]);

  useEffect(() => {
    if (windowWidth > LARGE_MIN) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  }, [isLarge, setIsLarge, windowWidth]);

  return isLarge ? (
    <Wrapper>
      <Container>
        <Link href="/">
          <LogoContainer>
            <StyledImage
              alt="teletaf logo"
              src={Logo}
              width="153"
              height="35"
            />
            <TagLine>Trouvez un CDI en télétravail</TagLine>
          </LogoContainer>
        </Link>
        <nav>
          <UnorderedList>
            <ListElement isSelected={pathname === ABOUT_URL}>
              <Link href={ABOUT_URL}>{MENU.ABOUT}</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>

            <ListElement isSelected={pathname === HOME_URL}>
              <Link href={HOME_URL}>{MENU.HOME}</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>
            <ListElement isSelected={pathname.includes(RESSOURCES_URL)}>
              <Link href={RESSOURCES_URL}>{MENU.RESSOURCES}</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>
          </UnorderedList>
        </nav>
        <Button as="a" href={NEW_JOBPOST_URL} target="_self">
          Publier mon annonce
        </Button>
      </Container>
    </Wrapper>
  ) : (
    <MobileWrapper>
      <MenuButtonContainer
        onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
      >
        <MenuButton isOpen={isMobileMenuOpened}>
          <svg width="32" height="32" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </MenuButton>
      </MenuButtonContainer>
      <NavContainer isOpen={isMobileMenuOpened}>
        <MobileNav>
          <UnorderedList>
            <ListElement isSelected={pathname === ABOUT_URL}>
              <Link href={ABOUT_URL}>{MENU.ABOUT}</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>

            <ListElement isSelected={pathname === HOME_URL}>
              <Link href={HOME_URL}>{MENU.HOME}</Link>
              <BulletContainer>
                <Bullet />
              </BulletContainer>
            </ListElement>
            <ListElement isSelected={pathname.includes(RESSOURCES_URL)}>
              <Link href={RESSOURCES_URL}>{MENU.RESSOURCES}</Link>
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
