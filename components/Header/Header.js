import React from "react";
import Media from "react-media";
// import { HeaderImage } from "../HeaderImage";
import { Input } from "../Input";
import { Container, InputContainer } from "./Header.styles";
import { NewsletterEmailBar } from "../NewsletterEmailBar";
import { LARGE } from "../../theme/theme";

export function Header({ showNewsletterEmailBar }) {
  return (
    <Container>
      {/* <HeaderImage /> */}
      {/* <InputContainer>
        <Media query={LARGE}>
          {isLarge =>
            isLarge ? (
              <Input fontSize={24} placeholder="trouvez votre taf à distance" />
            ) : (
              <Input fontSize={14} placeholder="trouvez votre taf à distance" />
            )
          }
        </Media>
      </InputContainer> */}
      {showNewsletterEmailBar && <NewsletterEmailBar />}
    </Container>
  );
}
