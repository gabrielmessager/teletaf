import React from "react";
import Media from "react-media";
import Link from "next/link";
import { Container, ListElement, UnorderedList } from "./Header.styles";
import { LARGE } from "../../theme/theme";
import Logo from "../../static/logo.svg";

export function Header() {
  return (
    <Container>
      <nav>
        <UnorderedList>
          <ListElement>
            <Link href="/">
              <img src={Logo} width="40" height="40" />
            </Link>
          </ListElement>
          <ListElement>
            <Link href="/about">Pourquoi Télétaf?</Link>
          </ListElement>
          <ListElement>
            <Link href="/resources">Resources</Link>
          </ListElement>
          <ListElement>
            <Link href="/new-jobpost">Publier mon annonce</Link>
          </ListElement>
        </UnorderedList>
      </nav>
    </Container>
  );
}
