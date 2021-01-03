import React from 'react';
import { Container, H1, H3, Paragraph } from '../Components';

export function NewJobPost() {
  return (
    <Container>
      <H1>
        Publier votre annonce sur Télétaf{' '}
        <span role="img" aria-label="Publier annonce">
          📝
        </span>
      </H1>
      <H3>
        Contactez-nous{' '}
        <span role="img" aria-label="Contactez-nous">
          📮
        </span>
      </H3>
      <Paragraph>
        Pour publier votre annonce, veuillez nous{' '}
        <b>
          envoyer un email à l'addresse suivante:{' '}
          <a href="mailto:teletafofficiel@gmail.com?subject=Publier%20mon%20annonce%20sur%20Télétaf">
            teletafofficiel@gmail.com
          </a>
          .
        </b>
      </Paragraph>
      <Paragraph>
        Nous serons en contact avec vous sous 24h ⏱ pour personaliser votre
        annonce et vous communiquer nos tarifs.
      </Paragraph>
      <Paragraph>
        Merci d'avance!{' '}
        <span role="img" aria-label="Merci">
          🙏
        </span>
      </Paragraph>
    </Container>
  );
}
