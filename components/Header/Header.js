import React from "react";
import Media from "react-media";
import Link from "next/link";
import { Container, ListElement, UnorderedList } from "./Header.styles";
import Logo from "../../static/logo.svg";
import MenuIcon from "../../static/icon_menu.svg";
import { Button } from "../../components/Button";
import { LARGE, LARGE_MIN } from "../../theme/theme";

export function Header({ pathname }) {
  return (
    <Media query={LARGE}>
      {(isLarge) => {
        return isLarge ? (
          <Container>
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
        ) : (
          <div>
            <img src={MenuIcon} width="24" height="17" />
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
          </div>
        );
      }}
    </Media>
  );
}
