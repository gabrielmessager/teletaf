import React, { useEffect, useState } from "react";
import Media from "react-media";
import { Input } from "../Input";
import { Select } from "../Select";
import { LARGE_MIN } from "../../theme/theme";
import {
  Container,
  InputContainer,
  SelectContainer,
  StyledButton,
  InnerContainer,
  Text,
  FormContainer,
} from "./NewsletterEmailBar.styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export function NewsletterEmailBar({ onSubmit }) {
  const [fontSize, setFontSize] = useState(18);
  const [errorMessage, setErrorMessage] = useState(null);
  const [value, setValue] = useState(null);
  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    if (windowWidth > LARGE_MIN) {
      setFontSize(18);
    } else {
      setFontSize(14);
    }
  });

  async function onSubmit(email) {
    try {
      const contentType = "application/json";
      const res = await fetch("/api/subscribe", {
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
      setErrorMessage(error);
    }
  }

  return (
    <Container>
      <InnerContainer>
        <Text>
          Je souhaite recevoir les dernières offres de télétravail une fois par
          semaine
        </Text>
        <FormContainer>
          {/* <SelectContainer>
            <Select
              backgroundColor="black"
              color="white"
              fontSize={fontSize}
              id="newsletter-frequence-select"
              name="newsletter frequence"
              values={["...", "jour", "semaine"]}
            />
          </SelectContainer> */}
          <Text>à</Text>
          <InputContainer>
            <Input
              fontSize={fontSize}
              color="white"
              placeholder="email@exemple.com"
              className="NewsletterEmailBar__Input"
              onChange={(e) => {
                console.log("EVENT", e.target);
                setValue(e.target.value);
              }}
              value={value}
            />
          </InputContainer>
          <StyledButton
            backgroundColor="white"
            color="black"
            onClick={() => {
              console.log("clicking");
              onSubmit({ email: value });
            }}
          >
            CONFIRMER
          </StyledButton>
        </FormContainer>
      </InnerContainer>
    </Container>
  );
}
