import React, { useEffect, useState, useRef } from 'react';
import Media from 'react-media';
import { Input } from '../Input';
import { Select } from '../Select';
import { LARGE_MIN, theme } from '../../theme/theme';
import {
  Container,
  InputContainer,
  SelectContainer,
  StyledButton,
  InnerContainer,
  Text,
  FormContainer,
  MessageContainer,
} from './NewsletterEmailBar.styles';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { useRefHeight } from '../../hooks/useRefHeight';

export function NewsletterEmailBar({ onSubmit }) {
  const [fontSize, setFontSize] = useState(18);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const { windowWidth } = useWindowWidth();
  const ref = useRef(null);
  const refHeight = useRefHeight(ref);

  function hideMessage() {
    setTimeout(() => setMessage(''), 5000);
  }

  useEffect(() => {
    if (windowWidth > LARGE_MIN) {
      setFontSize(18);
    } else {
      setFontSize(14);
    }
  }, [fontSize, setFontSize, windowWidth]);

  async function onSubmit({ email }) {
    if (!email) {
      setMessage('⚠️ Veuillez indiquer votre email 📮');
      hideMessage();
      return;
    }
    try {
      setMessage('');
      setIsSubmitting(true);
      const contentType = 'application/json';
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify({ email }),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      setMessage('🙏 Merci! Votre email a bien été enregistré! ✅');
      setValue('');
      hideMessage();
    } catch (error) {
      setMessage(
        'Hmm...🤔 Nous n’avons pas pu vous enregistrer. Contactez-nous à teletafofficiel@gmail.com'
      );
      hideMessage();
    }
    setIsSubmitting(false);
  }

  return (
    <Container>
      <MessageContainer height={refHeight} isActive={!!message.length}>
        <Text dark>{message}</Text>
      </MessageContainer>

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
              type="email"
              required
            />
          </InputContainer>
          <StyledButton
            backgroundColor="white"
            color="black"
            disabled={isSubmitting}
            onClick={() => onSubmit({ email: value })}
          >
            CONFIRMER
          </StyledButton>
        </FormContainer>
      </InnerContainer>
    </Container>
  );
}
