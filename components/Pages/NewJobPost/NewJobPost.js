import React, { useState } from "react";
import { Container, H1, H3, Paragraph } from "../Components";

export function NewJobPost() {
  return (
    <Container>
      <H1>Publier votre annonce sur Télétaf 📝</H1>
      <H3>Contactez nous 📮</H3>
      <Paragraph>
        <b>
          Pour publier votre annonce, veuillez nous envoyer un email à
          l'addresse suivante: email-at-gmail.com.
        </b>
      </Paragraph>
      <Paragraph>
        Nous serons en contact avec vous sous 24h ⏱ pour personaliser votre
        annonce et vous communiquer nos tarifs.
      </Paragraph>
      <Paragraph>Merci d'avance! 🙏</Paragraph>
    </Container>
  );
}
