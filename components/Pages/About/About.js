import React, { useState } from 'react';
import Link from 'next/link';
import { Container, H1, H3, Paragraph } from '../Components';
import { Footer } from '../../Footer';

export function About() {
  return (
    <Container>
      <H1>Trouvez votre prochain travail à distance</H1>
      <H3>Travaillez depuis chez vous 👩‍💻</H3>
      <Paragraph>
        Nous avons listé{' '}
        <Link href="/resources">les différents avantages du télétravail</Link>.
        N'attendez plus et consultez <Link href="/">nos offres</Link> dès
        maintenant.
      </Paragraph>
      <H3>Parlez vous français? 🇫🇷</H3>
      <Paragraph>
        Nos offres de télétravail proviennent d'entreprises francophones et sont
        principalement destinées aux personnes francophones. Nous sommes 285
        millions de francophones à travers le monde, ce qui fait du français la
        5ème langue la plus parlée au monde!
      </Paragraph>
      <H3>Consultez des offres récentes 🆕</H3>
      <Paragraph>
        Toutes nos offres d'emplois sont mises à jour régulièrement pour ne vous
        présenter que des offres de moins de 30 jours. Fini de perdre du temps à
        postuler à un emploi qui a déjà été pourvu.
      </Paragraph>
      <H3>Bénéficiez d'offres de qualité, triées sur le volet 👌</H3>
      <Paragraph>
        Toutes nos offres sont séléctionnées et triées manuellement pour
        s'assurer de la qualité des offres que vous consultez sur notre
        plateforme. Ah, et nous proposons que des CDI ou équivalent lorsque
        l'offre est à l'étranger.
      </Paragraph>
      <H3>Design simplifié 🙂</H3>
      <Paragraph>
        Le design de notre plateforme est volontairement simplifié pour vous
        permettre de vous y retrouver immédiatement et ne plus perdre de temps
        lorsqu'il s'agit de postuler à une offre d'emploi.
      </Paragraph>
      <H3>Aucun stockage de données personnelles 📊</H3>
      <Paragraph>
        Nous ne stockons aucune donnée vous concernant. Pas besoin de créer de
        compte avec mot de passe ou de confirmer votre email avant de consulter
        nos offres. Dans le cas où vous souscririez à notre newsletter, votre
        email ne sera pas partagé avec des organismes commerciaux tiers. Et vous
        pouvez toujours vous désinscrire à tout moment.
      </Paragraph>
      <H3>Vous avez une question / suggestion ❓</H3>
      <Paragraph>
        N'hésitez pas à nous contacter à l'adresse suivante:
        teletafofficiel@gmail.com. Nous ferons notre possible pour vous répondre
        sous 24h ⏱.
      </Paragraph>

      {/* <H2>Qui sommes nous? 👋</H2>
      <Paragraph>
        Je m'appelle Gabriel et j'ai développé télétaf pour vous aider a trouver
        un travail a distance simplement. Je suis moi-même passé par la case
        "recherche d'emploi" et j'ai toujours détesté l'interface de site comme
        LinkedIn ou Indeed qui listent un peu tout et n'importe quoi. Dans cette
        recherche de simplicité, j'ai décidé de créer Télétaf. N'hésitez pas à
        me contacter si vous avez des questions, suggestions, ou simplement
        besoin d'aide dans votre recherche.
      </Paragraph> */}
      {/* <Footer /> */}
    </Container>
  );
}

// Uniquement offres de teletravail des 30 derniers jours en langue francaise
// offres selectionnees et triees manuellement
// recherches par categories facilitee (jeune diplomes, secteur d'activites)
// interface simplifiee
// aucune donnees stockees

// qui sommes nous?
