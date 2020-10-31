import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
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
  ErrorMessage,
} from "./NewsletterEmailBar.styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useRefHeight } from "../../hooks/useRefHeight";

export function NewsletterEmailBar({ onSubmit }) {
  const [fontSize, setFontSize] = useState(18);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const { windowWidth } = useWindowWidth();
  const ref = useRef(null);
  const refHeight = useRefHeight(ref);

  useEffect(() => {
    if (windowWidth > LARGE_MIN) {
      setFontSize(18);
    } else {
      setFontSize(14);
    }
  }, [fontSize, setFontSize, windowWidth]);

  async function onSubmit({ email }) {
    console.log("email", email);
    if (!email) {
      setErrorMessage("Veuillez indiquer votre email 📮");
      return;
    }
    try {
      await setErrorMessage("");
      await setIsSubmitting(true);
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
      setErrorMessage(
        "Hmm... Nous n’avons pas pu vous enregistrer 🤔. Contactez-nous à télétaf@gmail.com"
      );
    }
    await setIsSubmitting(false);
  }

  console.log("errorMessage", errorMessage);

  return (
    <Container>
      <ErrorMessage height={refHeight} isActive={!!errorMessage.length}>
        <Text dark>{errorMessage}</Text>
      </ErrorMessage>

      <InnerContainer ref={ref}>
        <Text>
          Je souhaite recevoir les dernières offres de télétravail une fois par
          semaine à
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
          {/* <Text>à</Text> */}
          <InputContainer>
            <Input
              fontSize={fontSize}
              color="white"
              placeholder="email@exemple.com"
              className="NewsletterEmailBar__Input"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
          </InputContainer>
          <StyledButton
            backgroundColor="white"
            color="black"
            disabled={isSubmitting}
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
