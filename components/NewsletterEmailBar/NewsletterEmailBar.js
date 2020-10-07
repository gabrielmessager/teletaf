import React, { useEffect, useState } from "react";
import Media from "react-media";
import { Input } from "../Input";
import { Select } from "../Select";
import { LARGE, LARGE_MIN } from "../../theme/theme";
import {
  Container,
  InputContainer,
  SelectContainer,
  StyledButton,
  InnerContainer,
  Text,
  FormContainer,
} from "./NewsletterEmailBar.styles";

export function NewsletterEmailBar({ onSubmit }) {
  const [fontSize, setFontSize] = useState(18);

  useEffect(() => {
    function updateFontSize() {
      const isMobile = window.innerWidth < LARGE_MIN;
      const newFontSize = isMobile ? 14 : 18;
      setFontSize(newFontSize);
    }
    if (window.innerWidth < LARGE_MIN) {
      setFontSize(14);
    }
    // recalculate font size when window is resized.
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, [fontSize, setFontSize]);

  async function onSubmit(email) {
    try {
      const contentType = "application/json";
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(email),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }
    } catch (error) {
      console.log("Failed", error);
    }
  }

  return (
    <Media query={LARGE}>
      {(isLarge) => {
        return (
          <Container>
            <InnerContainer>
              <Text>
                Je souhaite recevoir les dernières offres de télétravail une
                fois par
              </Text>
              <FormContainer>
                <SelectContainer>
                  <Select
                    backgroundColor="black"
                    color="white"
                    fontSize={fontSize}
                    id="newsletter-frequence-select"
                    name="newsletter frequence"
                    values={["...", "jour", "semaine"]}
                  />
                </SelectContainer>
                <Text>à</Text>
                <InputContainer>
                  <Input
                    fontSize={fontSize}
                    color="white"
                    placeholder="email@exemple.com"
                    className="NewsletterEmailBar__Input"
                  />
                </InputContainer>
                <StyledButton
                  backgroundColor="white"
                  color="black"
                  onClick={() => {
                    console.log("clicking");
                    onSubmit({ email: "test" });
                  }}
                >
                  CONFIRMER
                </StyledButton>
              </FormContainer>
            </InnerContainer>
          </Container>
        );
      }}
    </Media>
  );
}
