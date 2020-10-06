import React from "react";
import Media from "react-media";
import { Input } from "../Input";
import { Select } from "../Select";
import { LARGE } from "../../theme/theme";
import {
  Container,
  InputContainer,
  SelectContainer,
  StyledButton,
  InnerContainer,
  Text,
  MobileContainer,
} from "./NewsletterEmailBar.styles";

function renderDesktop() {
  return (
    <>
      <Container>
        <InnerContainer>
          <Text>
            Je souhaite recevoir les dernières offres de télétravail une fois
            par
          </Text>
          <SelectContainer>
            <Select
              backgroundColor="black"
              color="white"
              fontSize={18}
              id="newsletter-frequence-select"
              name="newsletter frequence"
              values={["...", "jour", "semaine"]}
            />
          </SelectContainer>
          <Text>à</Text>
          <InputContainer>
            <Input
              fontSize={18}
              color="white"
              placeholder="email@exemple.com"
              className="NewsletterEmailBar__Input"
            />
          </InputContainer>
          <StyledButton backgroundColor="white" color="black">
            CONFIRMER
          </StyledButton>
        </InnerContainer>
      </Container>
    </>
  );
}

function renderMobile() {
  return (
    <>
      <Container>
        <InnerContainer>
          <Text>
            Envoyez-moi les dernières offres de télétravail une fois par
          </Text>
          <MobileContainer>
            <SelectContainer>
              <Select
                backgroundColor="black"
                color="white"
                fontSize={14}
                id="newsletter-frequence-select"
                name="newsletter frequence"
                values={["...", "jour", "semaine"]}
              />
            </SelectContainer>
            <Text>à</Text>
            <InputContainer>
              <Input
                fontSize={14}
                color="white"
                placeholder="email@exemple.com"
                className="NewsletterEmailBar__Input"
              />
            </InputContainer>
            <StyledButton backgroundColor="white" color="black">
              CONFIRMER
            </StyledButton>
          </MobileContainer>
        </InnerContainer>
      </Container>
    </>
  );
}
export function NewsletterEmailBar() {
  return (
    <Media query={LARGE}>
      {(isLarge) => (isLarge ? renderDesktop() : renderMobile())}
    </Media>
  );
}
